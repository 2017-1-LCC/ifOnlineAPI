

class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll(query,options) {
        return this.Model.find(query,options).exec();
    };

    listById(id) {
        return this.Model.findById({_id:id},(err,data));
    };

    create(data) {
        return this.Model.create(data).exec();
    };

    remove(id) {
        
    };

    update(id,data) {

    };
}

export default AbstractDAO;