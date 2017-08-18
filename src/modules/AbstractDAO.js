class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    listAll() {
       this.Model.find((err, docs) => {
                if (err) {
                    return err;
                }

                return docs
            });
    };

    listById(id) {
        return this.Model.findById({_id:id},(err,data));
    };

    create(data) {
        console.log(data);
        return this.Model.create(data)
            .then(obj => obj)
            .catch(err => err);
    };

    remove(id) {
        
    };

    update(id,data) {

    };
}

export default AbstractDAO;