import StudentService from './StudentService';
import Student from './Student';
import action from '../actions/actions';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.models.student);
    const typeAuth = 'token';

    server.route({
        method: 'GET',
        path: '/student',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

     server.route({
        method: 'GET',
        path: '/findstudentbyuser/{id}',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                action.findByUser(request,reply,service);
            }
        }
    });
   
    server.route({
        method: 'POST',
        path: '/student',
        config:{
            auth:false,
            handler: (request, reply) => {
                action.insert(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/student/{id}',
        config: {
            auth:typeAuth,
            handler: (request, reply) => {
                action.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/student/{id}',
        config: {
            auth:typeAuth,
            handler: (request, reply) => {
                action.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/student/{id}',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                action.update(request, reply, service);
            }
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};