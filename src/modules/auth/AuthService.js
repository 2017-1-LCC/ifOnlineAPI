
class StudentService {
  
  constructor(User) {
    this.user = User;
  }

  createToken(data,success,error) {

    if(data.username && data.password) {
     
      const login = data.username;

      this.user.findOne({'username':login})
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