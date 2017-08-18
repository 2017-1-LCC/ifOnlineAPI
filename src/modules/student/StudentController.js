import StudentService from './StudentService';

exports.register = function(server, options ,next) {

    const db = server.app.db;
    const service = new StudentService(db.student);

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            console.log(service.listAll());
            //console.log(db.student);
            /*
            db.student.find((err, docs) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                reply(docs);
            });
            */
        }
    });

    return next();
}

/*
export default (app) => {
    
    const studentService = new StudentService();

    app.route({
        method:'GET',
        path:'/student',
        handler: (request, reply) => {
           // const studentService = new StudentService();
           //let obj = studentService.findAll()
           //console.log(studentService.findAll());
            reply(studentService.findAll());
        }
    });

    app.route({
        method:'POST',
        path:'/student',
        handler: (request, reply) => {
            reply(studentService.create(request.payload));
        }
    })

}
*/

exports.register.attributes = {
    name: 'routes-student'
};