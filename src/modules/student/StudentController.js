import StudentService from './StudentService';

exports.register = function(server, options ,next) {

    const service = new StudentService(server.app.db.student);

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            service.listAll((err,docs) => {
                reply(docs);
            });
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-student'
};