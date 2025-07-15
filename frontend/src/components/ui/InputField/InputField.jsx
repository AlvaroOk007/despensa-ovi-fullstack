import './InputField.css';
export function InputField({
  placeholder,
  name,
  type,
  value,
  handleChange,
  error,
}) {
  return (
    <div className='input-field-container select-field-container'>
      <input
        className={`input-text-container ${error ? 'border-error' : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
}
