import StudentDAO from './StudentDAO';
import Student from './Student.js';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    listAll() {
       return this.studentDAO.listAll();
    };

    create(data) {
        this.studentDAO.create(data);
    }
}

export default StudentService;