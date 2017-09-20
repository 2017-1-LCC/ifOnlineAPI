import StudyGroupService from './StudyGroupService';
import action from '../actions/actions';

exports.register = function(server, options ,next) {

    const service = new StudyGroupService(server.app.db.models.studygroup,server.app.db.models.teacher);

    server.route({
        method: 'GET',
        path: '/findallinfogroup/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.findGroupsFullObject(request, reply, service);
            }
        }
    });

    // FALTA IMPLEMENTAR
    server.route({
        method: 'GET',
        path: '/groupsbyteacher/{name}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.findGroupsByTeacher(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/studygroup',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/studygroup',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.insert(request, reply, service);
            }
        }
    });


    server.route({
        method: 'DELETE',
        path: '/studygroup/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.remove(request, reply, service);
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/studygroup/{id}',
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
    name: 'routes-studygroup'
};