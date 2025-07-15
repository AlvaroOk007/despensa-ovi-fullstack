import { HeaderProducts } from './ui/HeaderPage/HeaderProducts';
import { Separator } from '../../components/ui/Separator/Separator';
import './Products.css';
import { Table } from './ui/Table/Table';
import { Search } from './ui/Search/Search';
import { FormProduct } from '../../components/FormProduct/FormProduct';
import { useState,useEffect, useRef } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Toast } from 'primereact/toast';
import { ModalConfirmation } from '../../components/ui/ModalConmfirmation/ModalConfirmation';

export function Products() {
  // Toast
  const toastRef = useRef(null);
  // Productos
  const { products, loading, error, getProducts } = useFetchProducts();
  useEffect(()=>{
    getProducts()
  },[])
  const [productsFiltered, setProductsFiltered] = useState(null);
  useEffect(() => {
    if (products) {
      setProductsFiltered([...products]);
    }
  }, [products]);
  // Estados de formulario
  const [showForm, setShowForm] = useState(false);

  //Estado para controlar formulario a editar
  const [formEdit, setFormEdit] = useState(null);

  // Estado de dato a eliminar
  const [idDelete, setIdDelete] = useState(0)
  // Estado para mostrar confimacion de eliminacion
  const [modalConfirmation, setModalConfirmation] = useState(false)
  // Funcion para mostrar formulario de edicion
  const handleFormEdit = (product) => {
    setShowForm(true);
    setFormEdit(product);
  };
  
  // funcion para mostrar modal de confirmacion de eliminacion

  const handleClickDelete = (id)=>{
    setIdDelete(id)
    setModalConfirmation(true)
  }
  // Funcion para mostrar formulario
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  // Componente
  return (
    <main className='main-products'>  
      {/*Modal de confimacion de la eliminacion*/}
      {modalConfirmation && <ModalConfirmation setModalConfirmation = {setModalConfirmation} idDelete = {idDelete} toastRef={toastRef} getProducts={getProducts}/> }
      {/* Toast */}
      {modalConfirmation && <Toast ref={toastRef} /> }
      {showForm && <Toast ref={toastRef} /> }
      {/* Formulario para agregar o editar un producto */}
      {showForm && (
        <FormProduct
          setShowForm={setShowForm}
          dataFormEdit={formEdit}
          setDataFormEdit={setFormEdit}
          toastRef={toastRef}
        />
      )}

      {/* Header: contiene titulo y boton de añadir un producto */}
      <HeaderProducts handleClick={handleShowForm} />

      {/* Separador */}
      <Separator />

      {/* Buscador */}
      <Search setProducts={setProductsFiltered} products={products} />
      
      {/* Separador */}
      <Separator />

      {/* Tabla de productos */}
      <Table handleClickEdit={handleFormEdit} handleClickDelete = {handleClickDelete}products={productsFiltered} setProducts={setProductsFiltered}/>

      {/* Loader */}
      {loading && <h2>Cargando productos...</h2>}

      {/* En caso de error */}
      {!loading && error && <h2>{error}</h2>}

      {/* En caso de que no haya productos */}
      {!loading && !error && productsFiltered.length === 0 && <h2>No hay productos</h2>}
    </main>
  );
}
