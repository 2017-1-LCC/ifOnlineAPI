import StudentService from './StudentService';
import Student from './Student';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.models.student);

    server.route({
        method: 'GET',
        path: '/student',
        config: {
            auth: 'simple',
            handler: (request, reply) => {
                callback.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/student',
        handler: (request, reply) => {
            callback.insert(request, reply, service);
        }
    });

    server.route({
        method: 'GET',
        path: '/student/{id}',
        handler: (request, reply) => {
            callback.findById(request, reply, service);
        }
    });

    server.route({
        method: 'DELETE',
        path: '/student/{id}',
        handler: (request, reply) => {
            callback.remove(request, reply, service);
        }
    });

    server.route({
        method: 'PUT',
        path: '/student/{id}',
        handler: (request, reply) => {
            callback.update(request, reply, service);
        }
    });



    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};