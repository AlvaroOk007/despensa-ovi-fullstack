import './Search.css';
import { InputField } from '../../../../components/ui/InputField/InputField';
import { InputSelect } from '../../../../components/ui/InputSelect/InputSelect';
import { options } from '../../../../data/optionsSearchArray';
import { useState } from 'react';
export function Search({ setProducts, products }) {
  //Estado de input de sleccion
  const [optionSelect, setOptionSelect] = useState(options[0]);

  // Maneja el cambio del select
  const handleChangeInputSelect = (e) => {
    const selectedOption = options.find((opt) => opt.id === e.target.value);
    if (selectedOption) setOptionSelect(selectedOption);
  };

  // Controlador de input de tipo texto
  const handleChangeInputText = (e) => {
    // Obtengo el texto a buscar
    const text = e.target.value.toLowerCase().trim();

    // Busca la key de la opcion seleccionada
    const key = options.find((o) => o.name === optionSelect.name).id;

    // Filtro los productos
    const productsSeaches = products.filter((product) =>
      product[key].toString().toLowerCase().trim().includes(text)
    );

    // Seteo lo productos
    setProducts(productsSeaches);
  };

  return (
    <div className='container-search'>
      <InputField
        type={'text'}
        placeholder='Buscar un producto...'
        name='Buscar producto'
        handleChange={handleChangeInputText}
      />
      <InputSelect
        options={options}
        handleChange={handleChangeInputSelect}
        value={optionSelect.id}
        name='optionSelect'
      />
    </div>
  );
}
