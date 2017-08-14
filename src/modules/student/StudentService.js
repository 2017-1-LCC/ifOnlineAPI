import StudentDAO from './StudentDAO';
import Student from './Student.js';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    findAll(query,options) {
        this.studentDAO.listAll(query,options)
            .then((err,data)=>{
                console.log('retorno do StudentService:',data);
            })
            .catch( err => console.log('erro no StudentService: ',err));
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