import AbstractDAO from '../AbstractDAO';

class StudentDAO extends AbstractDAO {

    constructor(Student) {
        super(Student);
        this.student = Student;
    };

    findByUser(idUser,success,error) {
        this.student.findOne({user:idUser})
            .populate('user')
            .exec()
            .then(success)
            .catch(error);
    }
}

export default StudentDAO;