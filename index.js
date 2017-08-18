'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import mongojs from 'mongojs';
mongoose.Promise = global.Promise;
import studentController from './src/modules/student/StudentController';

const server = new Hapi.Server();

server.connection({ port: 3001 });

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