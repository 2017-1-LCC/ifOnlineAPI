import action from '../actions/actions';
import AuthService from './AuthService';

exports.register = function(server, options, next) {

    const service = new AuthService(server.app.db.models.user);

    server.route({
        method:'POST',
        path:'/login',
        handler:(request, reply) => {
            action.createToken(request,reply,service);
        }
    });

    server.route({
        method:'POST',
        path:'/logout',
        handler:(request, reply) => {
            action.deleteToken(request,reply,service);
        }
    });
};

exports.register.attributes = {
    name: 'routes-auth'
};