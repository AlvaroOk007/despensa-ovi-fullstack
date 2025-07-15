import './HeaderTable.css';
import { ArrowDownUp } from 'lucide-react';
import './HeaderTable.css';
export function HeaderTable() {
  return (
    <thead className='table-container-header'>
      <tr>
        <th className='container-item-table'>
          <div className='item-table'>
            Codigo <ArrowDownUp className='item-table-icon' name='id'/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Nombre <ArrowDownUp className='item-table-icon' name='name'/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Precio unitario <ArrowDownUp className='item-table-icon' name='price'/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Stock <ArrowDownUp className='item-table-icon' name='stock'/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Marca <ArrowDownUp className='item-table-icon' name='brand'/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Categoria 
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Accion
          </div>
        </th>
      </tr>
    </thead>
  );
}
