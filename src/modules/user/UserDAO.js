import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User, Student, Teacher) {
        super(User);
        this.user = User;
        this.student = Student;
        this.teacher = Teacher;
    };

    findUserByUsername(username,success,error) {
        this.user.find({username:username})
            .exec()
            .then(success)
            .catch(error);
    };
}

export default UserDAO;