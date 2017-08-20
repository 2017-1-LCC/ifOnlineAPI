import AbstractDAO from '../AbstractDAO';

class TeacherDAO extends AbstractDAO {

    constructor(Teacher) {
        super(Teacher);
        this.teacher = Teacher;
    };
}

export default TeacherDAO;