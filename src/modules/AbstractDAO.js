class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll() {
        return this.Model
            .find({})
            .exec()
            .then(obj => obj)
            .catch(err => err);
        /* 
        return {
            "nick":"eliel",
            "registration":"202911"
        }
        */
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