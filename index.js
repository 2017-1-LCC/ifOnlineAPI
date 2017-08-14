'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import studentController from './src/modules/student/StudentController';

const app = new Hapi.Server();


app.connection({ port: 3000 });

// ### --- CONNECT WITH MONGODB --- ### 
/*
mongoose.connect('mongodb://localhost/ifonline', function(err, res) {
	if (err) {
		console.log('ERROR AO CONECTAR COM O BANCO DE DADOS. ' + err);
	} else {
		console.log('CONECTADO AO BANCO COM SUCESSO!');
	}
});
*/

const promisse = mongoose.createConnection('mongodb://localhost/ifonline',{
    useMongoClient: true,
});

promisse.then(db => {
   // console.log("resultado no promisse: ",db);
})

// ### --- START SERVER --- ### 
app.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${app.info.uri}`);
});

studentController(app);