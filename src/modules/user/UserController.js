import UserService from './UserService';
import User from './User';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new UserService(server.app.db.models.user);

    server.route({
        method: 'GET',
        path: '/user',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/user',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.insert(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/user/{id}',
        config: {
            auth:'token',
             handler: (request, reply) => {
                callback.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/user/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                callback.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/user/{id}',
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
    name: 'routes-user'
};