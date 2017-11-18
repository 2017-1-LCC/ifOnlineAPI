import StudyGroupDAO from './StudyGroupDAO';
import AbstractService from '../AbstractService';

class StudyGroupService extends AbstractService {

    constructor(StudyGroup, Teacher, Student) {
        super(new StudyGroupDAO(StudyGroup, Teacher, Student));
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup, Teacher, Student);
    };

    update(data, success, error) {
        return this.DAO.update(data.payload,success,error)
    }

    create(data,success,error) {
        
        if(data.payload.classSchedule) {
            data.payload.classSchedule = data.payload.classSchedule.filter(el => !el.removed );
        }

        if(data.payload.proof) {
            data.payload.proof = data.payload.proof.filter(el => !el.removed );
        }

        if(date.payload.scheduledActivity) {
            data.payload.scheduledActivity = data.payload.scheduledActivity.filter(el => !el.removed );
        }
    
        return this.DAO.create(data.payload,success,error);
    };

    findGroupsFullObject(data,success,error) {
        return this.studyGroupDAO.findGroupsFullObject(data.params.id,success,error);
    };
    // FALTA IMPLEMENTAR
    findByTeacher(name, success, error) {
        return this.studyGroupDAO.findByTeacher(name, success, error);
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
    
}

export default StudyGroupService;