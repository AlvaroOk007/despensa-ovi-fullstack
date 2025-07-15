import './RowTable.css';
import { Pencil, Trash } from 'lucide-react';
export function RowTable({ product,handleClickEdit }) {
  return (
    <tr>
      <td >{product.id}</td>
      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>
      <td>{product.Category.name}</td>
      <td className='btns-accion'>
        <div className='contariner-btn'>
          <Pencil strokeWidth={1.3} className='btn-action' onClick={()=> handleClickEdit(product)}/>
        </div>
        <div className='contariner-btn'>
          <Trash strokeWidth={1.3} className='btn-action' />
        </div>
      </td>
    </tr>
  );
}
