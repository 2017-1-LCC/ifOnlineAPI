import callback from '../utils/callbacks';
import AuthService from './AuthService';

exports.register = function(server, options, next) {

    //const service = new AuthService();

    server.route({
        method:'POST',
        path:'/login',
        handler:(request, reply) => {

        }
    });

    server.route({
        method:'POST',
        path:'/logout',
        handler:(request, reply) => {

        }
    });
}