import TeacherService from './TeacherService';
import Teacher from './Teacher';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new TeacherService(server.app.db.models.teacher);

    server.route({
        method: 'GET',
        path: '/teacher',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/teacher',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.insert(request, reply, service);
            }
        }
    });

     server.route({
        method: 'GET',
        path: '/findteacherbyuser/{id}',
        config: {
            auth: typeAuth,
            handler: (request, reply) => {
                callback.findByUser(request,reply,service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.update(request, reply, service);
            }
        }
    });



    return next();
}

exports.register.attributes = {
    name: 'routes-teacher'
};