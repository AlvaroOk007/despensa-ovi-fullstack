import { Button } from '../ui/Button/Button';
import { InputSelect } from '../ui/InputSelect/InputSelect';
import { InputField } from '../ui/InputField/InputField';
import './FormProduct.css';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { useFormData } from '../../hooks/useFormData';
export function FormProduct({
  setShowForm,
  dataFormEdit = null,
  setDataFormEdit,
  toastRef
}) {

  // Categorias
  const { categories, loading, error } = useFetchCategories();

  // Datos del formulario
  const { dataForm, errorsForm, handleChange, handleSubmit, handleCancel } =
    useFormData(dataFormEdit, setShowForm, setDataFormEdit, toastRef);

  return (
    <div className='conteiner-modal-form'>
      <div className='container-form'>
        <h2 className='title-form-product'>
          {dataFormEdit ? 'Editar producto' : 'Crear un nuevo producto'}
        </h2>
        {error && (
          <div
            className='error-message'
            style={{ color: 'red', marginBottom: '10px' }}
          >
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
            <Button label={dataFormEdit ? 'Guardar cambios' : 'Crear producto'} handleClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
