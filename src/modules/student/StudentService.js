import StudentDAO from './StudentDAO';

class StudentService {

    constructor(Student) {
        this.studentDAO = new StudentDAO(Student);
    };

    listAll(callback) {
        return this.studentDAO.listAll(callback);
    };

    listById(id,callback) {
        return this.studentDAO.listById(id,callback);
    };

    create(data,callback) {
        return this.studentDAO.create(data,callback);
    };
}

export default StudentService;