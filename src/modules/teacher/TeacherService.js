import TeacherDAO from './TeacherDAO';
import AbstractService from '../AbstractService';

class TeacherService extends AbstractService {

    constructor(Teacher) {
        super(new TeacherDAO(Teacher));
        this.teacherDAO = new TeacherDAO(Teacher);
    };

    findTeacherByUser(data,success,error) {
        return this.teacherDAO.findTeacherByUser(data.params.id,success,error);
    };

    findTeacherWithPopulate(success, error) {
        return this.teacherDAO.findTeacherWithGroups(success, error);
    }
}

export default TeacherService;