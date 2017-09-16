import StudentDAO from './StudentDAO';

class StudentService {

    constructor(Student) {
        this.studentDAO = new StudentDAO(Student);
    };

    listAll(success,error) {
        return this.studentDAO.listAll(success,error);
    };

    listById(id,success,error) {
        return this.studentDAO.listById(id,success,error);
    };

    create(data,success,error) {
        return this.studentDAO.create(data,success,error);
    };

    remove(id,success,error) {
        return this.studentDAO.remove(id,success,error);
    };

    update(id,data,success,error) {
        return this.studentDAO.update(id,data,success,error);
    };

    findByUser(idUser,success,error) {
        return this.studentDAO.findByUser(idUser,success,error);
    };
}

export default StudentService;