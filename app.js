const express = require('express')
const app = express()
const tasks = require('./routes/tasks') //Importa o arquivo tasks.js
const connectDB = require('./database/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

//Middleware
app.use(express.static('./public'))
app.use(express.json()) //Aqui é onde o app vai usar o json


//routes
//Aqui serão listados todos os caminhos para as funcionalidades do app
// get all tasks, create a new task, get a task, update a task, delete a task

app.use('/api/v1/tasks', tasks) //Aqui é onde o app vai usar as rotas do arquivo tasks.js
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 9001

/*Nessa organização, a aplicação só gera o aviso e conecta, caso as informações fonecidas em
.env sejam corretas...
As informações sendo corretas, ele chama o arquivo connect.js
*/

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server rodando no port ${port}`))
    } catch(error) {
        console.log(error)
    }
}

start()
