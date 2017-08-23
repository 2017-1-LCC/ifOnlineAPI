import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User) {
        super(User);
        this.user = User;
    };

    findByUsername(username,success,error) {
        this.user.find({name:username})
            .exec()
            .then(success)
            .catch(error);
    };
}

export default UserDAO;