import TeacherDAO from './TeacherDAO';

class TeacherService {

    constructor(Teacher) {
        this.teacherDAO = new TeacherDAO(Teacher);
    };

    listAll(callback) {
        return this.teacherDAO.listAll(callback);
    };

    listById(id,callback) {
        return this.teacherDAO.listById(id,callback);
    };

    create(data,callback) {
        return this.teacherDAO.create(data,callback);
    };

    remove(id,callback) {
        return this.teacherDAO.remove(id,callback);
    };

    update(id,data,callback) {
        return this.teacherDAO.update(id,data,callback);
    }
}

export default TeacherService;