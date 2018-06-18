const mongoose = require('mongoose')

//const localhost = 'mongodb://localhost/ifonline'
//const heroku = 'mongodb://ifonline:102030@ds025973.mlab.com:25973/sgvdb'
const heroku = 'mongodb://ifonline:102030@ds025973.mlab.com:25973/ifonlineDB'
const dbTeste = 'mongodb://admin:admin@ds149329.mlab.com:49329/db-teste';

mongoose.connect(dbTeste,{ useMongoClient: true } )
mongoose.connect(dbTeste)
mongoose.Promise = require('bluebird')

const db = mongoose.connection

db.on('error', (err) => console.log('Erro de conexao.', err) )
db.on('open', () => console.log('Conexão aberta.') )
db.on('connected', (err) => console.log('Conectado na base: ', dbTeste) )
db.on('disconnected', (err) => console.log('Desconectado') )

db.cleanDatabase = () => {
    mongoose.connection.dropDatabase();
    console.log("removendo schemas");
}

export default db;

