import './InputSelect.css'

export function InputSelect({options, handleChange, name, value = 1, disabled = false}){
  return(
    <select className='input-select-container' onChange={handleChange} name={name} value={value} disabled={disabled}>
      {
        options?.map((op,index) => <option key={index} value={op.id}>{op.name}</option>)
      }
    </select>
  )
}