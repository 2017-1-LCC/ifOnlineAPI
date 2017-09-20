import TeacherService from './TeacherService';
import action from '../actions/actions';

exports.register = function(server, options ,next) {

    const service = new TeacherService(server.app.db.models.teacher);

    server.route({
        method: 'GET',
        path: '/teacher',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/teacherprofile',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.findTeacherWithGroups(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/teacher',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.insert(request, reply, service);
            }
        }
    });

     server.route({
        method: 'GET',
        path: '/findteacherbyuser/{id}',
        config: {
            auth: 'token',
            handler: (request, reply) => {
                action.findTeacherByUser(request,reply,service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.findById(request, reply, service);
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/teacher/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.update(request, reply, service);
            }
        }
    });



    return next();
}

exports.register.attributes = {
    name: 'routes-teacher'
};