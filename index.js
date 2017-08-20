'use strict';

import Hapi from 'hapi';
import db from './src/modules/config/db';
import studentController from './src/modules/student/StudentController';

const server = new Hapi.Server();

server.connection({ port: 3001 });

server.app.db = db;


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