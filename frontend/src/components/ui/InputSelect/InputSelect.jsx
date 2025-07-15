import './InputSelect.css';

export function InputSelect({
  options,
  handleChange,
  name,
  value = 1,
  disabled = false,
  error,
}) {
  return (
    <div className='input-field-container'>
      <select
        className={`input-select-container ${error ? 'border-error' : ''}`}
        onChange={handleChange}
        name={name}
        value={value}
        disabled={disabled}
      >
        {options?.map((op, index) => (
          <option key={index} value={op.id}>
            {op.name}
          </option>
        ))}
      </select>
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
}
