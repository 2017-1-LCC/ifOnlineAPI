import StudentDAO from './StudentDAO';
import Student from './Student.js';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    findAll() {
       return this.studentDAO.listAll();
    };

    create(data) {
        this.studentDAO.create(data);
    }
}

export default StudentService;