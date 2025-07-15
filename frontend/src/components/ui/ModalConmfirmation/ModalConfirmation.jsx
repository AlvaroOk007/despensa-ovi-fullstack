import './ModalConfirmation.css';
import { useEffect } from 'react';
import { Button } from '../Button/Button'
import { deleteProduct} from '../../../services/deleteProduct.js'
import { useFetchProducts } from '../../../hooks/useFetchProducts.jsx';
export function ModalConfirmation({ setModalConfirmation, idDelete, toastRef }) {
  const { getProducts } = useFetchProducts() 
  // Evitar scroll cuando se muestre el formuulario
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // bloquea el scroll
    return () => {
      document.body.style.overflow = 'auto'; // lo vuelve a activar al cerrar
    };
  }, []);

  // Funcion de elmiminar
  const handleClickDelete = async (idDelete) => {
    const res = await deleteProduct(idDelete)
    if(res?.data === 1){
      toastRef?.current?.show({
        severity: 'success',
        summary: 'Eliminacion correcta',
        detail: 'Se eliminó correctamente el recurso.',
        life: 3000,
      });
      setTimeout(()=>{
        setModalConfirmation(false)
      }, 3000)
      getProducts()
    }else if (res?.data ===0){
      toastRef?.current?.show({
        severity: 'warn',
        summary: 'Recurso no encontrado',
        detail: 'No se pudo eliminar el producto.',
        life: 3000,
      });
      setTimeout(()=>{
        setModalConfirmation(false)
      }, 3000)
    }else{
      toastRef?.current?.show({
        severity: 'error',
        summary: 'Error en el servidor',
        detail: 'Ocurrió un error al momento de eliminar.',
        life: 3000,
      });
      setTimeout(()=>{
        setModalConfirmation(false)
      }, 3000)
    }
  }
  return (
    <div className='container-modal'>
      <div className='container-message-modal'>
        <h2 className='title-modal'>
          ¿Seguro que quieres eliminar el producto?
        </h2>
        <div className='btns-modal-confirmation'>
          <Button label='Cancelar' handleClick={()=>setModalConfirmation(false)}/>
          <Button label='Confirmar'handleClick={()=> handleClickDelete(idDelete)}/>
        </div>
      </div>
    </div>
  );
}
