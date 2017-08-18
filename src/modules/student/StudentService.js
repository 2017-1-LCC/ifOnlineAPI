import StudentDAO from './StudentDAO';

class StudentService {

    constructor(Student) {
        this.studentDAO = new StudentDAO(Student);
    };

    listAll(callback) {
        return this.studentDAO.listAll(callback);
    };

    create(data) {
        this.studentDAO.create(data);
    }
}

export default StudentService;