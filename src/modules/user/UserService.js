import UserDAO from './UserDAO';

class UserService {

    constructor(User) {
        this.userDAO = new UserDAO(Student);
    };

    listAll(callback) {
        return this.userDAO.listAll(callback);
    };

    listById(id,callback) {
        return this.userDAO.listById(id,callback);
    };

    create(data,callback) {
        return this.userDAO.create(data,callback);
    };

    remove(id,callback) {
        return this.userDAO.remove(id,callback);
    };

    update(id,data,callback) {
        return this.userDAO.update(id,data,callback);
    }
}

export default UserService;