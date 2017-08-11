import StudentService from './StudentService';

export default (app) => {
    
    const studentService = new StudentService();

    app.route('')
        .get((req,res) => {
            studentService.findAll();
        })

}