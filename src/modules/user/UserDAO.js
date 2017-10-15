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
                if(inseredUser.typeUser === 'TEACHER') {
                    this.teacher.create(other)
                        .then(success)
                        .catch(error)
                } else {
                    this.student.create(other)
                        .then(success)
                        .catch(error)
                }
            })
            .catch(error)
            .done()
    };

    removeWithDependecy(idUser, success, error) {
        const queryUser = {_id:idUser};
        this.user.findOne(queryUser)
            .exec()
            .then(user => {
                if(user.typeUser === 'STUDENT') {
                    user.remove();
                    this.student.findOne({user:idUser})
                        .exec()
                        .then(student => {
                            student.remove();
                        })
                        .catch(error)
                } else {
                    user.remove();
                    this.teacher.findOne({user:idUser})
                        .exec()
                        .then(teacher => {
                            teacher.remove();
                        })
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