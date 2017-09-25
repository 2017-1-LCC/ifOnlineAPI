import StudentDAO from './StudentDAO';
import AbstractService from '../AbstractService';

class StudentService extends AbstractService {

    constructor(Student) {
        super(new StudentDAO(Student));
        this.studentDAO = new StudentDAO(Student);
    };

    findStudentByUser(data,success,error) {

        return this.studentDAO.findStudentByUser(data.params.id,success,error);
    };
}

export default StudentService;