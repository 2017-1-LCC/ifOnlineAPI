
class AbstractService {

    constructor(dao,model) {
        this.dao = new dao(model);
    }
}

export default AbstractService;