// Importo Constructor de rutas
const { Router } = require('express')

// importo controladores de category
const { genericControllers } = require('../controllers')

// Importo middlewares
const { genericMiddlewares } = require('../middlewares')

// Instancio
const categoryRoutes = Router()

// Importo modelo
const { Category } = require('../db/models')
//--------------------------- Rutas

// Getters
categoryRoutes.get('/', genericControllers.getAll(Category))
categoryRoutes.get('/:id', 
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Category,"name"),
  genericControllers.getById(Category)
)

// Post
categoryRoutes.post('/', genericControllers.createOne(Category))

// Delete
categoryRoutes.delete('/:id',
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Category, "name"),
  genericControllers.deleteOne(Category)
)

// Patch
categoryRoutes.patch('/:id',
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Category, "name"),
  genericControllers.updateOne(Category)
)


// Exportacion

module.exports = { categoryRoutes }