import callback from '../utils/callbacks';
import AuthService from './AuthService';

exports.register = function(server, options, next) {

    const service = new AuthService(server.app.db.models.user);

    server.route({
        method:'POST',
        path:'/login',
        handler:(request, reply) => {
            callback.createToken(request,reply,service);
        }
    });

    server.route({
        method:'POST',
        path:'/logout',
        handler:(request, reply) => {
            calllback.deleteToken(request,reply,service);
        }
    });
};

exports.register.attributes = {
    name: 'routes-auth'
};