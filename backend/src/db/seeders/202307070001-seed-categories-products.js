'use strict';

const { fakerES: faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // CATEGORÍAS
    const categoryNames = [
      'Lácteos', 'Panadería', 'Bebidas', 'Snacks', 'Carnes',
      'Verduras', 'Frutas', 'Limpieza', 'Perfumería', 'Congelados',
      'Fiambres', 'Enlatados', 'Granos', 'Cereales', 'Pastas',
      'Galletitas', 'Bazar', 'Dulces', 'Condimentos', 'Mascotas'
    ];


    const categories = categoryNames.map((name, i) => ({
      id: i + 1,
      name,
    }));

    await queryInterface.bulkInsert('Categories', categories, {});

    // PRODUCTOS
    const products = [];

    for (let i = 0; i < 100; i++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
        stock: faker.number.int({ min: 0, max: 100 }),
        brand: faker.company.name(),
        CategoryId: faker.number.int({ min: 1, max: categoryNames.length }),
      });
    }

    await queryInterface.bulkInsert('Products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
