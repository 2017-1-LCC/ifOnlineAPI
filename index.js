'use strict';

import Hapi from 'hapi';
import db from './src/modules/config/db';

const server = new Hapi.Server();

server.connection({ port: 3001 });

server.app.db = db;


// ### --- START SERVER --- ### 
server.register([
    require('./src/modules/student/StudentController'),
    require('./src/modules/teacher/TeacherController'),
    require('./src/modules/studygroup/StudyGroupController')
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