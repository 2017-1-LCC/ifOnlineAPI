const mongoose = require('mongoose')

const localhost = 'mongodb://localhost/ifonline'
const heroku = 'mongodb://ifonline:102030@ds025973.mlab.com:25973/sgvdb'


mongoose.connect(heroku)
mongoose.Promise = require('bluebird')

const db = mongoose.connection

db.on('error', (err) => console.log('Erro de conexao.', err) )
db.on('open', () => console.log('Conexão aberta.') )
db.on('connected', (err) => console.log('Conectado na base: ', heroku) )
db.on('disconnected', (err) => console.log('Desconectado') )

export default db;

