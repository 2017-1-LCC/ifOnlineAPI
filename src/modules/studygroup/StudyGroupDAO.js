import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup) {
        super(StudyGroup);
        this.StudyGroup = StudyGroup;
    };

}

export default StudyGroupDAO;