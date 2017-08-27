const mongoose = require('mongoose')

const DB = 'ifonline'
const DB_UMBLER = 'mongodb://hc3:ifonline2017@tatooine.mongodb.umbler.com:40952/ifonline'
const heroku = 'mongodb://hc3:root@ds025973.mlab.com:25973/sgvdb'
mongoose.connect(DB_UMBLER)
mongoose.Promise = require('bluebird')

const db = mongoose.connection

db.on('error', (err) => console.log('Erro de conexao.', err) )
db.on('open', () => console.log('Conexão aberta.') )
db.on('connected', (err) => console.log('Conectado na base: ', DB_UMBLER) )
db.on('disconnected', (err) => console.log('Desconectado') )

export default db;

