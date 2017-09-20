import StudyGroupDAO from './StudyGroupDAO';
import AbstractService from '../AbstractService';

class StudyGroupService extends AbstractService {

    constructor(StudyGroup, Teacher) {
        super(new StudyGroupDAO(StudyGroup, Teacher));
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup, Teacher);
    };

    findGroupsFullObject(data,success,error) {
        return this.studyGroupDAO.findGroupsFullObject(data.params.id,success,error);
    };
    // FALTA IMPLEMENTAR
    findByTeacher(name, success, error) {
        return this.studyGroupDAO.findByTeacher(name, success, error);
    }
}

export default StudyGroupService;