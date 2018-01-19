import StudyGroupDAO from './StudyGroupDAO';
import AbstractService from '../AbstractService';

class StudyGroupService extends AbstractService {

    constructor(StudyGroup, Teacher, Student, Timeline) {
        super(new StudyGroupDAO(StudyGroup, Teacher, Student, Timeline));
        this.studyGroupDAO = new StudyGroupDAO(StudyGroup, Teacher, Student, Timeline);
    };

    update(data, success, error) {
        return this.DAO.update(data.payload,success,error)
    }

    addCommentOnGroup(data, success, error) {

        const groupId = {'_id':data.params.idGroup};

        const insertCommentQuery = {
            $push:{
                'comments':{
                    user:data.payload.user,
                    content:data.payload.content,
                    removed:data.payload.removed
                }
            }
        }
        return this.DAO.addComent(groupId, insertCommentQuery, success, error);
    }

    removeCommentOnGroup(data, success, error) {
        const groupId = {'_id':data.params.idGroup};
        const removeComment = {
            $pull:{
                'comments':{
                    _id:data.params.idComment
                }
            }
        }

        return this.DAO.removeComment(groupId, removeComment, success, error);
    }

    create(data,success,error) {
        
        if(data.payload.classSchedule) {
            data.payload.classSchedule = data.payload.classSchedule.filter(el => !el.removed );
        }

        if(data.payload.proof) {
            data.payload.proof = data.payload.proof.filter(el => !el.removed );
        }

        if(data.payload.scheduledActivity) {            
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