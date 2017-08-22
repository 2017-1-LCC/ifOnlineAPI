import UserDAO from './UserDAO';

class UserService {

    constructor(User) {
        this.userDAO = new UserDAO(Student);
    };

    listAll(success,error) {
        return this.userDAO.listAll(success,error);
    };

    listById(id,success,error) {
        return this.userDAO.listById(id,success,error);
    };

    create(data,success,error) {
        return this.userDAO.create(data,success,error);
    };

    remove(id,success,error) {
        return this.userDAO.remove(id,success,error);
    };

    update(id,data,success,error) {
        return this.userDAO.update(id,data,success,error);
    }
}

export default UserService;