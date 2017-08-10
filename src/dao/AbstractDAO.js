

class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll() {
        return this.Model.find(err,data);
    };

    listById(id) {
        return this.Model.findById({_id:id},(err,data));
    };

    create(data) {
        return this.Model.create(data);
    };

    remove(id) {
        
    };

    update(id,data) {

    };
}

export default AbstractDAO;