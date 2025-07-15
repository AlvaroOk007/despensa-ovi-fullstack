// Importar dotenv
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'alvaro',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'postgres_database',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
};