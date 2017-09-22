import UserDAO from './UserDAO';
import AbstractService from '../AbstractService';


class UserService extends AbstractService {

    constructor(User, Student, Teacher) {
        super(new UserDAO(User, Student, Teacher));
        this.userDAO = new UserDAO(User, Student, Teacher);
    };

    create(data,success,error) {
        // APLICAR VALIDAÇÃO AO CRIAR NOVO USUÁRIO
        const user = {
            username:data.payload.username,
            password:data.payload.password,
            typeUser:data.payload.typeUser
        };

        const other = {
            name:data.payload.name,
            birthDate:data.payload.birthDate,
            email:data.payload.email,
            user:null,
            groups:[]
        }
        return this.userDAO.create(user,other,success,error);
    };

    findByDecodedToken(id,success,error) {
        return this.userDAO.listById(id,success,error);
    };

    findUserByUsername(data,success,error) {
        return this.userDAO.findUserByUsername(data.params.name,success,error);
    }
}

export default UserService;