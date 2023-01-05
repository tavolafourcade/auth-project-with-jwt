import express from 'express'
import morgan from 'morgan'
import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('/Users/octaviolafourcade/Documents/PROYECTOS_PERSONAL/auth-project-with-jwt/package.json', 'utf8'))

const app = express()

app.set('pkg', pkg) // Sirve para colocarle un nombre a una variable y un valor

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

export default app