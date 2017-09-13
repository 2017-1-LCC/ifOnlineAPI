import StudyGroupDAO from './StudyGroupDAO';

class StudyGroupService {

    constructor(StudyGroup, Teacher) {
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup, Teacher);
    };

    listAll(success,error) {
        return this.studyGroupDAO.listAll(success,error);
    };

    listById(id,success,error) {
        return this.studyGroupDAO.listById(id,success,error);
    };

    create(data,success,error) {
        return this.studyGroupDAO.create(data,success,error);
    };

    remove(id,success,error) {
        return this.studyGroupDAO.remove(id,success,error);
    };

    update(id,data,success,error) {
        return this.studyGroupDAO.update(id,data,success,error);
    };

    findWithPopulate(id,success,error) {
        return this.studyGroupDAO.findWithPopulate(id,success,error);
    };

    findByTeacher(name, success, error) {
        return this.studyGroupDAO.findByTeacher(name, success, error);
    }
}

export default StudyGroupService;