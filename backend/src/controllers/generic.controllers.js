const {throwHttpError} = require('../utils/handleErrors')
const {handleResponse}=require('../utils/handleResponse')
const getAll = (model) => {
  return async (_, res) => {
    try {
      // Busco todos los recursos
      const allResponse = await model.findAll();

      // los retorno
      handleResponse(res, 200,'Recursos encontrados', allResponse)

    } catch (error) {
      throwHttpError(
        res,
        500,
        'Error en el servidor al realizar la peticion'
      )
    }
  };
};
const getById = (model) => {
  return async (req, res) => {
    try {

      // Obtengo los datos 
      const { id } = req.params;
      console.log(id)

      // busco el recurso
      const resourceResponse = await model.findByPk(id);

      // retorno
      handleResponse(res, 200,'Recurso encontrado', resourceResponse)

    } catch (error) {
      throwHttpError(
        res,
        500,
        'Error en el servidor al realizar la peticion'
      )
    }
  };
};

const createOne = (model) => {
  return async (req, res) => {
    try {
      const body = req.body;
      const resourceCreated = await model.create(body);
      handleResponse(res, 201,'Recurso encontrado', resourceCreated)
    } catch (error) {
      throwHttpError(
        res,
        500,
        'Error en el servidor al realizar la peticion'
      )
    }
  };
};

const updateOne = model => {
  return async (req,res) =>{
    try {
      // Obtengo datos
      const { id } = req.params;
      const body = req.body;

      // busco la catergoria
      const resourceSearched = await model.findByPk(id)

      // Actualizo
      const resourceUpdated = await resourceSearched.update(body)

      // Retorno
      handleResponse(res, 200,'Recurso actualizado', resourceUpdated)

    } catch (error) {

      throwHttpError(
        res,
        500,
        'Error en el servidor al realizar la peticion'
      )
    }
  }
}

const deleteOne = model => {
  return async (req,res)=>{
    try {
      // Obtengo el id
      const { id } = req.params
      
      // Elimino el elemento
      const resourceDeleted = await model.destroy({where: {id}})

      // Devuelvo una respuesta
      handleResponse(res, 200,'Recurso eliminado correctamente', resourceDeleted) 
    } catch (error) {
      throwHttpError(
        res,
        500,
        'Error en el servidor al realizar la peticion'
      )
    }
  }
}

// Exportacion
module.exports = {
  getAll,
  getById,
  createOne,
  updateOne,
  deleteOne
};
