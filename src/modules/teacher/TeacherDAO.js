import AbstractDAO from '../AbstractDAO';

class TeacherDAO extends AbstractDAO {

    constructor(Teacher) {
        super(Teacher);
        this.teacher = Teacher;
    };

    findTeacherByUser(id,success,error) {
        this.teacher.findOne({user:id})
            .populate({
                path:'user'
            })
            .populate({
                path:'groups',
                populate:{
                    path:'students'
                }
            })
            .exec()
            .then(success)
            .catch(error)
    };

    findTeacherWithGroups(success, error) {
        this.teacher.find()
            .populate('user',['_id','username'])
            .populate('groups')
            .exec()
            .then(success)
            .catch(error)
    }
}

export default TeacherDAO;