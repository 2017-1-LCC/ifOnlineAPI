import StudentService from './StudentService';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.student);

    server.route({
        method: 'GET',
        path: '/student',
        handler: (request, reply) => {
            callback.find(request,reply,service);
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



    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};