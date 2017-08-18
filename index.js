'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import mongojs from 'mongojs';
mongoose.Promise = global.Promise;
import studentController from './src/modules/student/StudentController';

const server = new Hapi.Server();


server.connection({ port: 3001 });

// ### --- CONNECT WITH MONGODB --- ### 
/*
mongoose.connect('mongodb://localhost/ifonline', function(err, res) {
	if (err) {
		console.log('ERROR AO CONECTAR COM O BANCO DE DADOS. ' + err);
	} else {
		console.log('CONECTADO AO BANCO COM SUCESSO!');
	}
});

const promisse = mongoose.createConnection('mongodb://localhost/ifonline',{
    useMongoClient: true,
});

promisse.then(db => {
    console.log("conectado ao banco com sucesso!");
    server.app.db = db;
   
})
*/

server.app.db = mongojs('ifonline',['student']);


// ### --- START SERVER --- ### 
server.register([
    require('./src/modules/student/StudentController')
],(err) => {
    if(err) {
        throw err;
    }

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
})