export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = 'El nombre es obligatorio';
  if (!formData.description.trim()) errors.description = 'La descripción es obligatoria';
  if (!formData.brand.trim()) errors.brand = 'La marca es obligatoria';
  if (formData.price <= 0) errors.price = 'El precio debe ser mayor a 0';
  if (formData.stock < 1) errors.stock = 'El stock no puede ser negativo';
  if (formData.CategoryId === 0) errors.category = 'Debe seleccionar una categoría';

  return errors;
};