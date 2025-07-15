const { Product, Category } = require('../db/models');
const {throwHttpError} = require('../utils/handleErrors')
const {handleResponse} = require('../utils/handleResponse')

// Devuelve todos los productos
const getAll = async (req, res) =>{
  try {
    const allProducts = await Product.findAll()
    handleResponse(res,200,'Recursos encontrados', allProducts)
  } catch (error) {
    throwHttpError(
      res,
      500,
      'Error en el servidor al realizar peticion'
    )
  }
}
// Devuelve un producto por Id
const getById = async (req,res) => {
  try {
    const { id } = req.params
    const productSearched = await Product.findOne({
      where: {id},
      include: Category
    })
    handleResponse(res,200,'Recurso encontrado', productSearched)
  } catch (error) {
    throwHttpError(
      res,
      500,
      'Error en el servidor al realizar peticion'
    )
  }
}
// Devuelve todos con su categoria
const getAllWithCategory = async (_,res) => {
  try {
    const allProducts = await Product.findAll({include: {model: Category}})
    handleResponse(res,200,'Recursos encontrados', allProducts)
  } catch (error) {
    throwHttpError(
      res,
      500,
      'Error en el servidor al realizar peticion'
    )
  }
}
// Devuelve todos los de una categoria
const getAllByCategory = async (req,res)=>{
  try {
    console.log('Llego')
    const { id } = req.params 
    const allSearched = await Product.findAll({where: {CategoryId: id}, include:Category})
    handleResponse(res,200,'Recursos encontrados', allSearched)
  } catch (error) {
    throwHttpError(
      res,
      500,
      'Error en el servidor al realizar peticion'
    )
  }
}

const createOne = async (req,res) => {
  try {
    const body = req.body
    const productCreated = await Product.create(body)
    handleResponse(res,201,'Recursos Creado', productCreated)
  } catch (error) {
    throwHttpError(
      res,
      500,
      'Error en el servidor al realizar peticion'
    )
  }
}
module.exports = {
  getAll,
  createOne,
  getAllWithCategory,
  getById,
  getAllByCategory
};
