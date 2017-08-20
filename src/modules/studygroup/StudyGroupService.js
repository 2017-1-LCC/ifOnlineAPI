import StudyGroupDAO from './StudyGroupDAO';

class StudyGroupService {

    constructor(StudyGroup) {
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup);
    };

    listAll(callback) {
        return this.studyGroupDAO.listAll(callback);
    };

    listById(id,callback) {
        return this.studyGroupDAO.listById(id,callback);
    };

    create(data,callback) {
        return this.studyGroupDAO.create(data,callback);
    };

    remove(id,callback) {
        return this.studyGroupDAO.remove(id,callback);
    };

    update(id,data,callback) {
        return this.studyGroupDAO.update(id,data,callback);
    }
}

export default StudyGroupService;