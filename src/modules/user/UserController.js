import UserService from './UserService';
import User from './User';
import action from '../actions/actions';

exports.register = function(server, options ,next) {

    const service = new UserService(server.app.db.models.user);

    server.route({
        method: 'GET',
        path: '/user',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/user',
        config: {
            auth:false,
            handler: (request, reply) => {
                action.insert(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/user/{id}',
        config: {
            auth:'token',
             handler: (request, reply) => {
                action.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/user/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/user/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.update(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/finduserbyusername/{name}',
        config: {
            auth:'token',
             handler: (request, reply) => {
                action.findUserByUsername(request, reply, service);
            }
        }
    });


    return next();
}

exports.register.attributes = {
    name: 'routes-user'
};