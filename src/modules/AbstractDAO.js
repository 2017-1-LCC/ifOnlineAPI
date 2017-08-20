class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll(callback) {
        this.Model.find(callback);
    };

    listById(id,callback) {
        const query = {_id:id};
        this.Model.findOne(query,callback);
    };

    create(data,callback) {
        this.Model.create(data,callback);
    };

    remove(id,callback) {
        const query = {_id:id};
        this.Model.remove(query,callback);
    };

    update(id,data) {
        
    };
}

export default AbstractDAO;