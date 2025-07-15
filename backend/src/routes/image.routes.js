// Importo constructor
const { Router } = require('express')

//Importo middleware para subir imagenes
const { upload } = require('../middlewares')
// creo router
const imageRoutes = Router()

// Creo las rutas

imageRoutes.post('/', upload.array('images',10))

module.exports = {
  imageRoutes
}