import success from './success';
import sucessToken from './success-token';
import errorToken from './error-token';
import error from './error';


//REFATORAR PASSAR SÓ O REQUEST COMO ARGUMENTO
/* 
* DEIXAR A CHAMADA ASSIM service.method(request, success(reply), error(reply))
* REFATORAR TODOS OS SERVICES
* ORGANIZAR NOME DAS AÇÕES
* TROCAR NOME DA PASTA DE CALLBACKS PARA ACTIONS
*/
const obj = {

    find: (req, res, service) => {
        service.listAll(success(res),error(res));
    },
    findById: (req, res, service) => {
        service.listById(req,success(res),error(res));
    },
    insert: (req, res, service) => {
        service.create(req,success(res),error(res));
    },
    remove: (req, res, service) => {
        service.remove(req,success(res),error(res));
    },
    update: (req, res, service) => {
        service.update(req,success(res),error(res));
    },
    createToken:(req, res, service) => {
        service.createToken(req.payload,sucessToken(res,req.payload),errorToken(res));
    },
    deleteToken:(req, res, service) => {
        service.deleteToken(req.payload,sucessToken(res),errorToken(res));
    },

    // USER SERVICE
    findUserByUsername:(req, res, service) => {
        service.findUserByUsername(req, success(res), error(res));
    },


    // TEACHER SERVICE
    findTeacherByUser:(req, res, service) => {
        service.findTeacherByUser(request.params.id,success(reply),error(reply));
    },
    findTeacherWithGroups: (req, res, service) => {
        service.findTeacherWithGroups(success(reply),error(reply));
    },

    // GROUPS SERVICE 
    findGroupsFullObject:(req, res, service) => {
        service.findGroupsFullObject(request.params.id,success(reply), error(reply));
    },
    findGroupsByTeacher:(req, res, service) => {
        service.findGroupsByTeacher(request.params.name, success(reply), error(reply));
    }

}

export default obj;
