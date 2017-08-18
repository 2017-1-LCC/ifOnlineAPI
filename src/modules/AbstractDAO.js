class AbstractDAO {

    constructor(Model) {
        this.Model = Model;
    };

    async listAll(callback) {
        try{
            await this.Model.find(callback);
        }catch(error){
            throw error;
        }
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