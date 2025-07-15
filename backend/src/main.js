// Importo la app
const app = require('./app.js')

// importo rutas
const { categoryRoutes,imageRoutes,productRoutes } = require('./routes')

app.use('/categories', categoryRoutes)
app.use('/images', imageRoutes)
app.use('/products', productRoutes)