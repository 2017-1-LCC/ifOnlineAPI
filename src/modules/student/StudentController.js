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
           // const studentService = new StudentService();
           //let obj = studentService.findAll()
           //console.log(studentService.findAll());
            //reply(studentService.findAll());
       const list = studentService.listAll();
       list.then(obj => console.log("objeto: ",obj));
       console.log(list);
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