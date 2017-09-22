import UserService from './UserService';
import User from './User';
import Teacher from '../teacher/Teacher';
import Student from '../student/Student';
import action from '../actions/actions';

exports.register = function(server, options ,next) {

    const user = server.app.db.models.user
    const student = server.app.db.models.student
    const teacher = server.app.db.models.teacher

    const service = new UserService(user,student,teacher);

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