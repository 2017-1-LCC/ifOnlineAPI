import UserDAO from './UserDAO';
import AbstractService from '../AbstractService';


class UserService extends AbstractService {

    constructor(User, Student, Teacher) {
        super(new UserDAO(User, Student, Teacher));
        this.userDAO = new UserDAO(User, Student, Teacher);
    };

    create(data,success,error) {
        const user = {
            username:'',
            password:'',
            typeUser:''
        };

        const other = {
            name:'',
            birthDate:'',
            email:'',
            user:'',
            groups:[]
        }

        return this.userDAO.create(data.payload,success,error);
    };

    findByDecodedToken(id,success,error) {
        return this.userDAO.listById(id,success,error);
    };

    findUserByUsername(data,success,error) {
        return this.userDAO.findUserByUsername(data.params.name,success,error);
    }
}

export default UserService;