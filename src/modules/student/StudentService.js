import StudentDAO from './StudentDAO';
import AbstractService from '../AbstractService';

class StudentService extends AbstractService {

    constructor(Student) {
        super(new StudentDAO(Student));
        this.studentDAO = new StudentDAO(Student);
    };

    findByUser(idUser,success,error) {
        return this.studentDAO.findByUser(idUser,success,error);
    };
}

export default StudentService;