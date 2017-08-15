import StudentService from './StudentService';

export default (app) => {
    
    const studentService = new StudentService();
    /*
    app.route('/student')
        .get((req,res) => {
            //studentService.findAll();
        })
    */

    app.route({
        method:'GET',
        path:'/student',
        handler: (request, reply) => {
           // console.log("retorno do findAll: ",studentService.findAll());
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