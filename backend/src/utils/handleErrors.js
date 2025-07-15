// Manejador de errores para los controladores
const throwHttpError = (res, statusCode, message) => {
  return res.status(statusCode).json({ error: message });
};

// Manejador de errores para middlewares
const newError = (statusCode, message) => {
  const err = new Error(message);
  err.status = statusCode;
  return err;
};



module.exports = {
  throwHttpError,
  newError
}