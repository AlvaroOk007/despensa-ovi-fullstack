import './InputField.css';
export function InputField({ placeholder, name, type, value, handleChange }) {
  return (
    <input
      className='input-text-container'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
