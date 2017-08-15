import StudentDAO from './StudentDAO';
import Student from './Student.js';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    findAll(query,options) {
       return this.studentDAO.listAll({});
    };

    create(data) {
        this.studentDAO.create(data)
            .then((err,data) => {
                console.log('cadastrado com sucesso: ',data);
            })
            .catch(err => console.log('erro ao cadastrar :',err));
    }
}

export default StudentService;