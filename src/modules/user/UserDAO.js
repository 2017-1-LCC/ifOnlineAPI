import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User, Student, Teacher) {
        super(User);
        this.user = User;
        this.student = Student;
        this.teacher = Teacher;
    };

    update(user,other,success,error) {
        this.user.findOneAndUpdate({_id:user._id},user)
            .then(updatedUser => {
                if(updatedUser.typeUser === 'TEACHER') {
                    this.teacher.findOneAndUpdate({_id:other._id},other)
                        .then(success)
                        .catch(error)
                } else {
                    this.student.findOneAndUpdate({_id:other._id},other)
                        .then(success)
                        .catch(error)
                }
            })
            .catch(error)
            .done()
    };


    create(data,success,error) {

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