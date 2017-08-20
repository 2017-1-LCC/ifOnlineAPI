import StudyGroupService from './StudyGroupService';
import StudyGroup from './StudyGroup';
import callback from '../utils/callbacks';

exports.register = function(server, options ,next) {

    const service = new StudyGroupService(server.app.db.models.studygroup);

    server.route({
        method: 'GET',
        path: '/studygroup',
        handler: (request, reply) => {
            callback.find(request,reply,service);
        }
    });

    server.route({
        method: 'POST',
        path: '/studygroup',
        handler: (request, reply) => {
            callback.insert(request, reply, service);
        }
    });

    server.route({
        method: 'GET',
        path: '/studygroup/{id}',
        handler: (request, reply) => {
            callback.findById(request, reply, service);
        }
    });

    server.route({
        method: 'DELETE',
        path: '/studygroup/{id}',
        handler: (request, reply) => {
            callback.remove(request, reply, service);
        }
    });

    server.route({
        method: 'PUT',
        path: '/studygroup/{id}',
        handler: (request, reply) => {
            callback.update(request, reply, service);
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-studygroup'
};