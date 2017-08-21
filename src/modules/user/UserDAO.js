import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User) {
        super(User);
        this.user = User;
    };
}

export default UserDAO;