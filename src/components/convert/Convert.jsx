import { useState } from 'react';
import Hex2Rgb from './Hex2Rgb/Hex2Rgb.jsx';

const Convert = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [error, setError] = useState(false);

  const handleHexChange = (e) => {
    const value = e.target.value;
    setHex(value);

    if (value.length === 7 && /^#[0-9A-F]{6}$/i.test(value)) {
      setError(false);
      const rgbValue = Hex2Rgb(value);
      setRgb(rgbValue);
      document.body.style.backgroundColor = value;
    } else if (value.length === 7) {
      setError(true);
      setRgb('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={hex}
        onChange={handleHexChange}
        placeholder="#FFFFFF"
        maxLength="7"
      />
      {error && <p className="error">Ошибка! Invalid HEX value</p>}
      <input type="text" value={rgb} readOnly placeholder="rgb(255, 255, 255)" />
    </div>
  );
};

export default Convert;
