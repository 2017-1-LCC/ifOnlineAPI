import StudyGroupDAO from './StudyGroupDAO';
import AbstractService from '../AbstractService';

class StudyGroupService extends AbstractService {

    constructor(StudyGroup, Teacher, Student) {
        super(new StudyGroupDAO(StudyGroup, Teacher, Student));
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup, Teacher, Student);
    };

    findGroupsFullObject(data,success,error) {
        return this.studyGroupDAO.findGroupsFullObject(data.params.id,success,error);
    };
    // FALTA IMPLEMENTAR
    findByTeacher(name, success, error) {
        return this.studyGroupDAO.findByTeacher(name, success, error);
    }

    addProofOnGroup(data, success, error) {
        const idGroup = data.params.idGroup;
        const proof = data.payload;
        return this.studyGroupDAO.addProofOnGroup(idGroup, proof, success, error);
    }

    removeProofOnGroup(data, success, error) {
        const idGroup = data.params.idGroup;
        const proof = data.payload;
        return this.studyGroupDAO.addProofOnGroup(idGroup, proof, success, error);
    }

    addStudentOnGroup(data, success, error) {
        const idStudent = data.params.idStudent;
        const idGroup = data.params.idGroup;
        return this.studyGroupDAO.addStudentOnGroup(idStudent, idGroup, success, error);
    }

    removeStudentOnGroup(data, success, error) {
        const idStudent = data.params.idStudent;
        const idGroup = data.params.idGroup;
        return this.studyGroupDAO.removeStudentOnGroup(idStudent, idGroup, success, error);
    }

    updateStudyGroup() {
        
    }
}

export default StudyGroupService;