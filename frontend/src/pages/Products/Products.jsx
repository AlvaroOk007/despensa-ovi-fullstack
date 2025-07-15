import { HeaderProducts } from './ui/HeaderPage/HeaderProducts';
import { Separator } from '../../components/ui/Separator/Separator';
import './Products.css';
import { Table } from './ui/Table/Table';
import { Search } from './ui/Search/Search';
import { FormProduct } from '../../components/FormProduct/FormProduct';
import { useState,useEffect } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
export function Products() {
  // Productos
  const { products, loading, error } = useFetchProducts();
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

  // Funcion para mostrar formulario de edicion
  const handleFormEdit = (product) => {
    setShowForm(true);
    setFormEdit(product);
  };

  // Funcion para mostrar formulario
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <main className='main-products'>  
      {/* Formulario para agregar o editar un producto */}
      {showForm && (
        <FormProduct
          setShowForm={setShowForm}
          dataFormEdit={formEdit}
          setDataFormEdit={setFormEdit}
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
      <Table handleClickEdit={handleFormEdit} products={productsFiltered} />

      {/* Loader */}
      {loading && <h2>Cargando productos...</h2>}

      {/* En caso de error */}
      {!loading && error && <h2>{error}</h2>}

      {/* En caso de que no haya productos */}
      {!loading && !error && productsFiltered.length === 0 && <h2>No hay productos</h2>}
    </main>
  );
}
