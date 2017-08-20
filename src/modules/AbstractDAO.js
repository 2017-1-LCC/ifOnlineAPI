class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll(callback) {
        this.Model.find(callback);
    };

    listById(id,callback) {
        //console.log("findById ",this.Model.findOne());
        
        const query = {_id:id};
        this.Model.findOne(query,callback);
    };

    create(data,callback) {
        //console.log("create [data]: ",data);
        //console.log("create [callback]: ",callback);
        //const model = new this.Model(data);
        const instanceModel = new this.Model();
        instanceModel.create(data,callback);

    };

    remove(id) {
        
    };

    update(id,data) {

    };
}

export default AbstractDAO;