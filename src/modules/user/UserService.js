import UserDAO from './UserDAO';
import AbstractService from '../AbstractService';


class UserService extends AbstractService {

    constructor(User) {
        super(new UserDAO(User));
        this.userDAO = new UserDAO(User);
    };

    findByDecodedToken(id,success,error) {
        return this.DAO.listById(id,success,error);
    };

    findUserByUsername(data,success,error) {
        return this.userDAO.findUserByUsername(data.params.name,success,error);
    }
}

export default UserService;