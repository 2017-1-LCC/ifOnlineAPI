import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup) {
        super(StudyGroup);
        this.group = StudyGroup;
    };

    findWithPopulate(id,success,error) {
        this.group.findOne({_id:id})
            .populate('admin')
            .populate('teacher')
            .populate('students')
            .exec()
            .then(success)
            .catch(error);
    }

}

export default StudyGroupDAO;