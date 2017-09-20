class AbstractService {
  
  constructor(DAO) {
    this.DAO = DAO;
  };

  listAll(success,error) {
      return this.DAO.listAll(success,error);
  };

  listById(data,success,error) {
      return this.DAO.listById(data.params.id,success,error);
  };

  create(data,success,error) {
      return this.DAO.create(data.payload,success,error);
  };

  remove(data,success,error) {
      return this.DAO.remove(data.params.id,success,error);
  };

  update(data,success,error) {
      return this.DAO.update(data.payload,success,error);
  };
}

export default AbstractService;