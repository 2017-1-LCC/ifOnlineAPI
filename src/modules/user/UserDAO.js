import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User, Student, Teacher) {
        super(User);
        this.user = User;
        this.student = Student;
        this.teacher = Teacher;
    };

    create(user,other,success,error) {
        this.user.create(user)
            .then(inseredUser => {
                other.user = inseredUser._id
                if(inseredUser.typeUser === 'STUDENT') {
                    this.student.create(other)
                        .then(success)
                        .catch(error)
                } else {
                    this.teacher.create(other)
                        .then(success)
                        .catch(error)
                }
            })
            .catch(error)
            .done()
    };

    findUserByUsername(username,success,error) {
        this.user.find({username:username})
            .exec()
            .then(success)
            .catch(error);
    };
}

export default UserDAO;