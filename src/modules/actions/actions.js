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
    // COMMON FOR ALL -------------------------------------------------------------------------------
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
    // ---------------------------------------------------------------------------------------------

    


    // USER SERVICE --------------------------------------------------------------------------------
    findUserByUsername:(req, res, service) => {
        service.findUserByUsername(req, success(res), error(res));
    },

    removeWithDependecy:(req, res , service) => {
        service.removeWithDependecy(req, success(res), error(res));
    },

    // ---------------------------------------------------------------------------------------------



    // STUDENT SERVICE -----------------------------------------------------------------------------
    findStudentByUser:(req, res, service) => {
        service.findStudentByUser(req,success(res),error(res));
    },

    // ---------------------------------------------------------------------------------------------



    // TEACHER SERVICE -----------------------------------------------------------------------------
    findTeacherByUser:(req, res, service) => {
        service.findTeacherByUser(req,success(res),error(res));
    },
    findTeacherWithGroups: (req, res, service) => {
        service.findTeacherWithGroups(success(res),error(res));
    },

    // ---------------------------------------------------------------------------------------------



    // GROUPS SERVICE -------------------------------------------------------------------------------
    findGroupsFullObject:(req, res, service) => {
        service.findGroupsFullObject(req,success(res), error(res));
    },
    findGroupsByTeacher:(req, res, service) => {
        service.findGroupsByTeacher(req, success(res), error(res));
    },
    addStudentOnGroup:(req, res, service) => {
        service.addStudentOnGroup(req, success(res), error(res));
    },
    removeStudentOnGroup:(req, res, service) => {
        service.removeStudentOnGroup(req, success(res), error(res));
    },
    addProofOnGroup:(req, res, service) => {
        service.addProofOnGroup(req, success(res), error(res));
    },
    removeProofOnGroup:(req, res, service) => {
        service.removeProofOnGroup(req, success(res), error(res));
    }
    // -----------------------------------------------------------------------------------------------
}

export default obj;
