import success from './success';
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
    }
    

}

export default obj;