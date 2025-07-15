import './Button.css'
export function Button({label, handleClick}){
  return <button className='btn-add-product' onClick={handleClick}>{label}</button>
}