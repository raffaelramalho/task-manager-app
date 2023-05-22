const mongoose = require('mongoose')

//esquema de data que vão entrar no banco de dados , o padrão a ser seguido
//Qualquer coisa só olhar na doc os tipos de dados aceitados pelo mongoose

//qualquer outra coisa que for na request FORA as propriedades abaixo, 
//ira ser desconsiderado na hora de fazer o cadastro no banco de dados
const TaskSchema = new mongoose.Schema({
Nome:{
    type:String,
    required:[true,'Esse campo não pode estar vazio'],
    trim:true,
    maxlength:[35,'O nome não pode ser maior que 30 caracteres']
},
//Para fazer validações, basta definir o valor do parametro como um objeto
Completado:{
    type: Boolean,
    default: false,
}
})

module.exports = mongoose.model('Task',TaskSchema)