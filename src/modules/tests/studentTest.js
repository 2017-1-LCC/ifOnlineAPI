import model from '../student/Student';
import modelUser from  '../user/User';

describe("## Testando as rotas de Student",() => {

  const user = {
    username:'teste01',
    password:'teste',
    typeUser:'STUDENT'
  };

  const defaultObj = {
    name:"teste01",
    birthDate:"2017-09-20",
    email:"teste@mail.com",
    user:null
  }

  let id, token, secondID;

  before(done => {
    model.remove({})
      .then(() => null)
    done();
  })

  after(function() {
    modelUser.remove({})
      .then(() => null)
    done();
  });

  before(done => {
      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(user)
      },res => {
        defaultObj.user = res.result._id;
      })

      Server.inject({
        method:"POST",
        url:"/student",
        payload: JSON.stringify(defaultObj)
      },res => {
        id = res.result.id
        done();
      })
  })


})