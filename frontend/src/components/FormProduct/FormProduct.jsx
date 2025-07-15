import { Button } from '../ui/Button/Button';
import { InputSelect } from '../ui/InputSelect/InputSelect';
import { InputField } from '../ui/InputField/InputField';
import './FormProduct.css';
import { useState } from 'react';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { validateForm } from '../../utils/formValidation';
import { createProduct } from '../../hooks/CreateProducts.js';
export function FormProduct({
  setShowForm,
  dataFormEdit = null,
  setDataFormEdit,
}) {
  // Categorias
  const { categories, loading, error } = useFetchCategories();

  // Datos iniciales
  const initialData = dataFormEdit
    ? (() => {
        // Copiamos dataFormEdit
        const copy = { ...dataFormEdit };
        // Eliminamos las keys que no queremos
        delete copy.Category;
        delete copy.createdAt;
        delete copy.updatedAt;
        return copy;
      })()
    : {
        name: '',
        description: '',
        brand: '',
        price: 0,
        stock: 0,
        CategoryId: 0,
      };
  // Datos de errores
  const [errorsForm, setErrorsForm] = useState();
  // Estado de datos del formulario
  const [dataForm, setDataForm] = useState(initialData)

  // Envio de formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validateForm(dataForm);
    if (Object.keys(errors).length > 0) {
      setErrorsForm(errors)
    } else {
      console.log('no hay errores');
      let res = await createProduct(dataForm)
      if(res.error){
        alert('Error al crear el producto');
      }else{
        alert('Producto creado correctamente');
        setShowForm(false);
        setDataFormEdit(null);
      }
    }
  };
  // Actualizacion de estados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funcion de cancelar
  const handleCancel = (e) => {
    e.preventDefault();
    setDataFormEdit(null);
    setShowForm(false);
  };
  return (
    <div className='conteiner-modal-form'>
      <div className='container-form'>
        <h2 className='title-form-product'>
          {dataFormEdit ? 'Editar producto' : 'Crear un nuevo producto'}
        </h2>
        {error && (
          <div className='error-message' style={{ color: 'red', marginBottom: '10px' }}>
            Error al cargar categorías: {error}
          </div>
        )}
        <form typeof='onSubmit' className='form-product-container'>
          <div className='form-row'>
            <InputField
              handleChange={handleChange}
              value={dataForm.name}
              type={'text'}
              placeholder='Nombre del producto'
              name='name'
              error={errorsForm?.name}
            />
            <InputField
              handleChange={handleChange}
              value={dataForm.description}
              type={'text'}
              placeholder='Descripcion del producto'
              name='description'
              error={errorsForm?.description}
            />
          </div>
          <div className='form-row'>
            <InputField
              handleChange={handleChange}
              value={dataForm.brand}
              type={'text'}
              placeholder='Marca del producto'
              name='brand'
              error={errorsForm?.brand}
            />
            <InputField
              handleChange={handleChange}
              value={dataForm.price}
              type={'number'}
              placeholder='Precio  unitario'
              name='price'
              error={errorsForm?.price}
            />
          </div>
          <div className='form-row'>
            <InputField
              handleChange={handleChange}
              value={dataForm.stock}
              type={'number'}
              placeholder='Stock del producto'
              name='stock'
              error={errorsForm?.stock}
            />
            <InputSelect
              name='CategoryId'
              handleChange={handleChange}
              options={categories}
              label='Seleccione una categoria'
              value={dataForm.CategoryId}
              disabled={loading}
              error={errorsForm?.category}
            />
          </div>
          <div className='form-row btns-form'>
            <Button label='Cancelar' handleClick={handleCancel} />
            <Button label='Crear producto' handleClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
