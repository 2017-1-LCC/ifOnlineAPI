import AbstractDAO from '../AbstractDAO';

class StudentDAO extends AbstractDAO {

    constructor(Student) {
        super(Student);
        this.student = Student;
    };
}

export default StudentDAO;