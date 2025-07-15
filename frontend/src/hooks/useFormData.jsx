import { useState } from 'react';
import { validateForm } from '../utils/formValidation';
import { createProduct } from '../services/createProduct.js';
import { updateProduct } from '../services/updateProduct.js';
import { useEffect } from 'react';
import { useFetchProducts } from './useFetchProducts.jsx';
export const useFormData = (
  dataFormEdit,
  setShowForm,
  setDataFormEdit,
  toastRef
) => {
  const {getProducts} = useFetchProducts()
  // Evitar scroll cuando se muestre el formuulario
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // bloquea el scroll
    return () => {
      document.body.style.overflow = 'auto'; // lo vuelve a activar al cerrar
    };
  }, []);
  const id = dataFormEdit?.id;
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
  const [errorsForm, setErrorsForm] = useState({});
  // Estado de datos del formulario
  const [dataForm, setDataForm] = useState(initialData);

  // Envio de formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validateForm(dataForm);
    if (Object.keys(errors).length > 0) {
      setErrorsForm(errors);
      toastRef?.current?.show({
        severity: 'error',
        summary: 'Campos inválidos',
        detail: 'Por favor revisá el formulario.',
        life: 3000,
      });
    } else {
      console.log('no hay errores');
      let res = id
        ? await updateProduct(dataForm, id)
        : await createProduct(dataForm);
      if (res && res.error) {
        toastRef?.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al cargar el producto.',
          life: 3000,
        });
      } else {
        toastRef?.current?.show({
          severity: 'success',
          summary: 'Correcto',
          detail: `Se pudo ${dataFormEdit ? 'editar' : 'crear'} el producto.`,
          life: 3000,
        });
        setTimeout(() => {
          getProducts()
          setShowForm(false);
          setDataFormEdit(null);
        }, 3000);
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

  // Retorno de datos
  return {
    dataForm,
    errorsForm,
    handleChange,
    handleSubmit,
    handleCancel,
  };
};
