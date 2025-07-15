const { throwHttpError } = require('../utils/handleErrors')

const checkExistId = (model,nameModel) => {
  return async (req,res, next) =>{
    try {
      const { id } = req.params

      // Busco el recurso
      const resourceSearched = await model.findByPk(id)

      // Lanzo error en caso de no encontrar
      if (!resourceSearched) return throwHttpError(res, 404, `Recurso con id:${id} no encontrado en la tabla ${nameModel}`)
      
      // Paso al siguiende Middleware
      next()
    } catch (error) {
      throwHttpError(res,500,`Error con al buscar el recurso en la tabla ${nameModel}`)
    }
  }
}

const chechValidId = () => {
  return (req,res,next) => {
    const { id } = req.params
    
    // Controlo si es numero
    if (isNaN(id)) return throwHttpError(res,400, 'Mala petición: el id dado no es un numero')
    
    // Controlo que sea mayor a 0
    if (id <0 ) return throwHttpError(res,400, 'Mala petición: el id dado debe ser mayor a 0')
    
    next()
  }
}
module.exports = {
  checkExistId,
  chechValidId
}