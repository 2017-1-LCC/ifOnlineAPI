class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll(success,error) {
        this.Model.find()
            .exec()
            .then(success)
            .catch(error);
    };

    listById(id,success,error) {
        const query = {_id:id};
        this.Model.findOne(query)
            .exec()
            .then(success)
            .catch(error);
    };

    create(data,success,error) {
        this.Model.create(data)
            .then(success)
            .catch(error);
    };

    remove(id,success,error) {
        const query = {_id:id};
        this.Model.remove(query)
            .then(success)
            .catch(error);
    };

    update(id,data,success,error) {
        const query = {_id:id};
        this.Model.findOneAndUpdate(query,data)
            .then(success)
            .catch(error);
    };
}

export default AbstractDAO;