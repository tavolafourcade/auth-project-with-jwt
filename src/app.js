import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

import { createRoles } from './libs/initialSetup.js'

const pkg = JSON.parse(fs.readFileSync('/Users/octaviolafourcade/Documents/PROYECTOS_PERSONAL/auth-project-with-jwt/package.json', 'utf8'))

const app = express()
createRoles()

app.set('pkg', pkg) // Sirve para colocarle un nombre a una variable y un valor

app.use(express.json()) // Para que entienda los objetos JSON que llegan al servidor

app.use(morgan('dev'))

// Routes
app.get('/', (req,res) => {
  res.json({
    name: pkg.name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/api/products', productsRoutes) // Especifico que todas las rutas de productsRoutes van a empezar con /products
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

export default app