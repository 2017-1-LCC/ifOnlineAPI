import success from './success';
import sucessToken from './success-token';
import errorToken from './error-token';
import error from './error';

const obj = {

    find: (request,reply,service) => {
        service.listAll(success(reply),error(reply));
    },
    findById: (request, reply, service) => {
        service.listById(request.params.id,success(reply),error(reply));
    },
    insert: (request,reply,service) => {
        service.create(request.payload,success(reply),error(reply));
    },
    remove: (request, reply, service) => {
        service.remove(request.params.id,success(reply),error(reply));
    },
    update: (request, reply, service) => {
        service.update(request.params.id,request.payload,success(reply),error(reply));
    },
    createToken:(request, reply, service) => {
        service.createToken(request.payload,sucessToken(reply,request.payload),errorToken(reply));
    },
    deleteToken:(request, reply, service) => {
        service.deleteToken(request.payload,sucessToken(reply),errorToken(reply));
    }
}

export default obj;