import express from 'express'
import usuariosRouter from './src/routes/users.router.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(usuariosRouter)

app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port)
})
