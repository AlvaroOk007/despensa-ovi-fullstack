// importaciones
const { Router } = require('express')
const { genericControllers,productControllers } = require('../controllers/')
const { Product, Category } = require('../db/models')
const { genericMiddlewares} = require('../middlewares/')

// Creo el router
const productRoutes = Router()

// --------------------- Defino las rutas

// Getters
productRoutes.get('/category', productControllers.getAllWithCategory)
productRoutes.get('/', productControllers.getAll)
productRoutes.get('/:id',
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Product,"Productos"),
  productControllers.getById
)

productRoutes.get('/category/:id', 
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Category, "Categorias"),
  productControllers.getAllByCategory
)

// Post 
productRoutes.post('/', genericControllers.createOne(Product))

// Delete
productRoutes.delete('/:id', 
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Product, "Productos"),
  genericControllers.deleteOne(Product))

// Put
productRoutes.patch('/:id', 
  genericMiddlewares.chechValidId(),
  genericMiddlewares.checkExistId(Product, "Productos"),
  genericControllers.updateOne(Product)
)
// Exportacion

module.exports = {
  productRoutes
}