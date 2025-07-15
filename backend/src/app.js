// Importo express 
const express = require('express')


// Importo db
const db = require('./db/models')
// Creo mi aplicacion
const app = express()
// Configuro cors
const cors = require('cors')
app.use(cors())
// Importar dotenv
require('dotenv').config();

// Puerto 
const PORT = process.env.APP_PORT || 4000

// Uso los tipo json para recibir los body
app.use(express.json())

// Listo mi app
app.listen(PORT, async()=>{
  //await db.sequelize.sync({force: true})
  console.log(`Server listen on http://localhost:${PORT}`)
})

module.exports = app