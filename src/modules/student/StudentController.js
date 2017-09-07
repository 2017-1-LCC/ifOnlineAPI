import StudentService from './StudentService';
import Student from './Student';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.models.student);
    const typeAuth = 'token';

    server.route({
        method: 'GET',
        path: '/student',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                callback.find(request,reply,service);
            }
        }
    });

     server.route({
        method: 'GET',
        path: '/findbyuser/{id}',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                callback.findByUser(request,reply,service);
            }
        }
    });
   
    server.route({
        method: 'POST',
        path: '/student',
        config:{
            auth:false,
            handler: (request, reply) => {
                callback.insert(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/student/{id}',
        config: {
            auth:typeAuth,
            handler: (request, reply) => {
                callback.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/student/{id}',
        config: {
            auth:typeAuth,
            handler: (request, reply) => {
                callback.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/student/{id}',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                callback.update(request, reply, service);
            }
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};