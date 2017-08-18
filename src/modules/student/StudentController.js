import StudentService from './StudentService';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.student);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            callback.find(request,reply,service);
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};