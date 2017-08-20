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

    remove(id,callback) {
        return this.studentDAO.remove(id,callback);
    }
}

export default StudentService;