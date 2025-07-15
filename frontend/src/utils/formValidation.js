export const validateForm = (formData) => {
  const errors = {};

  // Validación de nombre
  if (!formData.name.trim()) {
    errors.name = 'El nombre es obligatorio';
  } else if (formData.name.length < 5) {
    errors.name = 'El nombre debe tener al menos 5 caracteres';
  }

  // Validación de descripción
  if (!formData.description.trim()) {
    errors.description = 'La descripción es obligatoria';
  } else if (formData.description.length < 10) {
    errors.description = 'La descripción debe tener al menos 10 caracteres';
  }

  // Validación de marca
  if (!formData.brand.trim()) {
    errors.brand = 'La marca es obligatoria';
  } else if (formData.brand.length < 3) {
    errors.brand = 'La marca debe tener al menos 3 caracteres';
  }

  // Validación de precio
  if (formData.price <= 100) {
    errors.price = 'El precio debe ser mayor a 100';
  } else if (formData.price > 100000) {
    errors.price = 'El precio debe ser menor a 100000';
  } else if (isNaN(formData.price)) {
    errors.price = 'El precio debe ser un número';
  }

  // Validación de stock
  if (formData.stock < 20) {
    errors.stock = 'El stock debe ser mayor a 20';
  } 

  // Validación de categoría
  if (Number(formData.CategoryId) === 0) {
    errors.category = 'Debe seleccionar una categoría';
  }
  return errors;
};
