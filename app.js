'use strict';
import Hapi from 'hapi';
import db from './src/modules/config/db';

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3002 });
server.app.db = db;
//console.log(server.app.db);
// ### --- START SERVER --- ### 
server.register([
    require('./auth'),
    require('./src/modules/student/StudentController'),
    require('./src/modules/teacher/TeacherController'),
    require('./src/modules/studygroup/StudyGroupController'),
    require('./src/modules/user/UserController'),
    require('./src/modules/auth/AuthController'),
],(err) => {
    if(err) throw err;
})

export default server;