import cloudinary from 'cloudinary';
import multer from 'multer';

const upload = multer({ dest: './uploads/'});

cloudinary.config({ 
    cloud_name: 'hc3', 
    api_key: '689678777189239', 
    api_secret: 'g9WbuIE2yeWnkF1shQj_w2An32A' 
}); 

import UserDAO from './UserDAO';
import AbstractService from '../AbstractService';


class UserService extends AbstractService {

    constructor(User, Student, Teacher) {
        super(new UserDAO(User, Student, Teacher));
        this.userDAO = new UserDAO(User, Student, Teacher);
    };

    update(data,success,error) {
        // APLICAR VALIDAÇÃO AO CRIAR NOVO USUÁRIO

        if(data.payload.avatar) {

            cloudinary.v2.uploader.upload("data:image/png;base64,"+data.payload.avatar, {public_id:data.payload._id})
    
            .then(result => {
    
                const user = {
                    _id:data.payload._id,
                    username:data.payload.username,
                    avatar:result.url,
                    typeUser:data.payload.typeUser,
                    email:data.payload.email
                };
        
                const other = {
                    _id:data.payload.idOther,
                    name:data.payload.name,
                    birthDate:data.payload.birthDate
                };
        
                return this.userDAO.update(user,other,success,error);
    
            })
        } else {

            const user = {
                _id:data.payload._id,
                username:data.payload.username,
                typeUser:data.payload.typeUser,
                email:data.payload.email
            };
    
            const other = {
                _id:data.payload.idOther,
                name:data.payload.name,
                birthDate:data.payload.birthDate
            };
    
            return this.userDAO.update(user,other,success,error);

        }


            
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