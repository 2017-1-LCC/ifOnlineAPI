
class StudentService {
  
  constructor(User) {
    this.user = User;
  }

  createToken(data,success,error) {

    if(data.name && data.password) {
     
      const login = data.name;

      this.user.findOne({'name':login})
        .then(success)
        .catch(error);
        
    } else {
      throw new Error("usuário ou senha incorretos");
    }
  };

  getToken() {
    
  }
}

export default StudentService;