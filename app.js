'use strict';

import Hapi from 'hapi';
import db from './src/modules/config/db';
import basicAuth from 'hapi-auth-basic';

const server = new Hapi.Server();

server.connection({ port: 3001 });

server.app.db = db;

// ### --- START SERVER --- ### 
server.register([
    require('./src/modules/student/StudentController'),
    require('./src/modules/teacher/TeacherController'),
    require('./src/modules/studygroup/StudyGroupController'),
    basicAuth
],(err) => {

    if(err) {
        throw err;
    }

    function basicValidation(request, username, password, callback) {

        const user = users[ username ]

        if (!user) {
            return callback(null, false)
        }

        Bcrypt.compare(password, user.password, function (err, isValid) {
            callback(err, isValid, { id: user.id, username: user.username })
        })
    }

    server.auth.strategy('simple','basic',{ validateFunc: basicValidation });
})

export default server;