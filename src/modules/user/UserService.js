import UserDAO from './UserDAO';
import AbstractService from '../AbstractService';


class UserService extends AbstractService {

    constructor(User, Student, Teacher) {
        super(new UserDAO(User, Student, Teacher));
        this.userDAO = new UserDAO(User, Student, Teacher);
    };

    update(data,success,error) {
        // APLICAR VALIDAÇÃO AO CRIAR NOVO USUÁRIO
        const user = {
            _id:data.payload._id,
            username:data.payload.username,
            avatar:data.payload.avatar,
            typeUser:data.payload.typeUser,
            email:data.payload.email
        };

        const other = {
            _id:data.payload.idOther,
            name:data.payload.name,
            birthDate:data.payload.birthDate
        };

        return this.userDAO.update(user,other,success,error);
    };

    create(data,success,error) {
        // APLICAR VALIDAÇÃO AO CRIAR NOVO USUÁRIO
        const user = {
            username:data.payload.username,
            password:data.payload.password,
            typeUser:data.payload.typeUser,
            email:data.payload.email,
        };

        const other = {
            name:data.payload.name,
            birthDate:data.payload.birthDate,
            user:null,
            groups:[]
        }
        return this.userDAO.create(user,other,success,error);
    };

    removeWithDependecy(idUser, success, error) {
        return this.userDAO.removeWithDependecy(idUser, success, error);
    }

    findByDecodedToken(id,success,error) {
        return this.userDAO.listById(id,success,error);
    };

    findUserByUsername(data,success,error) {
        return this.userDAO.findUserByUsername(data.params.name,success,error);
    }
}

export default UserService;