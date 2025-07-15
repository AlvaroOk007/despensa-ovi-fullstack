import { HeaderTable } from './HeaderTable/HeaderTable';
import './Table.css';
import { RowTable } from './RowTable/RowTable';
export function Table({handleClickEdit, handleClickDelete, products,setProducts}) {
  return (
    <table className='conteiner-table'>
      <HeaderTable products={products} setProducts={setProducts}/>
      <tbody className='table-body'>
        {products && products?.map((product) => <RowTable product={product} key={product.id} handleClickEdit={handleClickEdit} handleClickDelete={handleClickDelete} />)}
      </tbody>
    </table>
  );
}
