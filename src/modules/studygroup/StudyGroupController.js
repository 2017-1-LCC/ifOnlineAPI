import StudyGroupService from './StudyGroupService';
import Studygroup from './StudyGroup';
import Teacher from '../teacher/Teacher';
import Student from '../student/Student';
import action from '../actions/actions';

exports.register = function(server, options ,next) {
    const studygroup = server.app.db.models.studygroup;
    const teacher = server.app.db.models.teacher;
    const student = server.app.db.models.student;

    const service = new StudyGroupService(studygroup,teacher,student);

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
        method: 'POST',
        path: '/add/{idStudent}/ingroup/{idGroup}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.addStudentOnGroup(request, reply, service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/remove/{idStudent}/ingroup/{idGroup}',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.removeStudentOnGroup(request, reply, service);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/studygroup',
        config: {
            auth:{
                strategy:'token',
                scope:['TEACHER']    
            },
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