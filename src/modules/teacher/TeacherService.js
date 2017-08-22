import TeacherDAO from './TeacherDAO';

class TeacherService {

    constructor(Teacher) {
        this.teacherDAO = new TeacherDAO(Teacher);
    };

    listAll(success,error) {
        return this.teacherDAO.listAll(success,error);
    };

    listById(id,success,error) {
        return this.teacherDAO.listById(id,success,error);
    };

    create(data,success,error) {
        return this.teacherDAO.create(data,success,error);
    };

    remove(id,success,error) {
        return this.teacherDAO.remove(id,success,error);
    };

    update(id,data,success,error) {
        return this.teacherDAO.update(id,data,success,error);
    }
}

export default TeacherService;