import './HeaderTable.css';
import { ArrowDownUp } from 'lucide-react';
import './HeaderTable.css';
import { useState } from 'react';
export function HeaderTable({products, setProducts}) {

  const [sortConfig, setSortConfig] = useState({ field: null, direction: 'asc' })

  const toggleSortDirection = (field) => {
    if (sortConfig.field === field) {
      return sortConfig.direction === 'asc' ? 'desc' : 'asc'
    }
    return 'asc'
  }

  const orderByNumber = (field) => {
    const direction = toggleSortDirection(field)
    const listOrder = [...products]
    listOrder.sort((a, b) => direction === 'asc' ? a[field] - b[field] : b[field] - a[field])
    setSortConfig({ field, direction })
    setProducts(listOrder)
  }

  const orderByString = (field) => {
    const direction = toggleSortDirection(field)
    const listOrder = [...products]
    listOrder.sort((a, b) => direction === 'asc'
      ? a[field].localeCompare(b[field])
      : b[field].localeCompare(a[field])
    )
    setSortConfig({ field, direction })
    setProducts(listOrder)
  }
  return (
    <thead className='table-container-header'>
      <tr>
        <th className='container-item-table'>
          <div className='item-table'>
            Código <ArrowDownUp className='item-table-icon' name='id' onClick={() => orderByNumber('id')}/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Nombre <ArrowDownUp className='item-table-icon' name='name' onClick={() => orderByString('name')} />
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Precio unitario <ArrowDownUp className='item-table-icon' name='price'  onClick={() => orderByNumber('price')}/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Stock <ArrowDownUp className='item-table-icon' name='stock'  onClick={() => orderByNumber('stock')}/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Marca <ArrowDownUp className='item-table-icon' name='brand'  onClick={() => orderByString('brand')}/>
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Categoria 
          </div>
        </th>
        <th className='container-item-table'>
          <div className='item-table'>
            Acción
          </div>
        </th>
      </tr>
    </thead>
  );
}
