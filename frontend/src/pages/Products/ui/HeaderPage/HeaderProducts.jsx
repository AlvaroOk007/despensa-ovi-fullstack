import { Button } from '../../../../components/ui/Button/Button.jsx'
import './HeaderProducts.css'
export function HeaderProducts({handleClick}){
  return(
    <div className="header-products-container">
      <h2 className='products-title'>Listado de Productos</h2>
      <Button label='Agregar Producto' handleClick={handleClick}/>
    </div>
  )
}