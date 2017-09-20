import model from '../teacher/Teacher';
import modelUser from  '../user/User';

describe("## TESTANDO FUNCIONALIDADES DO PROFESSOR",() => {

  const user = {
    username:'teacherUser',
    password:'teste',
    typeUser:'TEACHER'
  };

  const defaultObj = {
    name:"teacherName",
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

  after(done => {
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
        url:"/teacher",
        payload: JSON.stringify(defaultObj)
      },res => {
        id = res.result._id
        done();
      })
  })

  describe("BUSCA TODOS OS PROFESSOR SEM USO DO TOKEN", () => {
    it("DEVE RETORNAR 401 ( SEM PERMISSÃO )", done => {
      Server.inject({
        method:"GET",
        url:"/teacher"
      },res => {
        expect(res.statusCode).to.eql(401);
        done();
      })
    })
  })

  describe("EXECUTA REQUESTS USANDO TOKEN", () => {

    it("/LOGIN -> DEVE FAZER LOGIN", done => {
      Server.inject({
        method:"POST",
        url:"/login",
        payload: JSON.stringify(user)
      },res => {
        console.log("token: ",token);
        token = res.result.token;
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/teacher -> BUSCA TODOS OS PROFESSOR", done => {
      Server.inject({
        method:"GET",
        url:"/teacher",
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
       // console.log(res.result);
        //expect(res.result).to.be.an('array');
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/teacher/{id} -> BUSCA PROFESSOR POR ID", done => {
      Server.inject({
        method:"GET",
        url:"/teacher/"+id,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })
//VERIFICAR
    it("/teacher/{name} -> BUSCA PROFESSOR POR USERNAME", done => {
      Server.inject({
        method:"GET",
        url:"/findteacherbyuser/"+defaultObj.username,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/teacher -> CRIA NOVO PROFESSOR", done => {

      const userTwo = {
        username:'teste02',
        password:'teste',
        typeUser:'STUDENT'
      };

      const defaultObj2 = {
        name:"teste02",
        birthDate:"2017-09-20",
        email:"teste02@mail.com",
        user:null
      };

      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(userTwo)
      },res => {
        defaultObj2.user = res.result._id;
      })

      Server.inject({
        method:"POST",
        url:"/teacher",
        payload: JSON.stringify(defaultObj2)
      },res => {
        secondID = res.result._id;
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/teacher/{id} -> ATUALIZA PROFESSOR", done => {

      const defaultObjUpdated = {
        name:"teste02 - updated",
        birthDate:"2017-09-20",
        email:"teste02-updated@mail.com"
      };

      Server.inject({
        method:"PUT",
        url:"/teacher/"+secondID,
        headers: {  
          'Authorization':'Bearer '+token
        },
        payload: JSON.stringify(defaultObjUpdated)
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/teacher/{id} -> REMOVE PROFESSOR", done => {

      Server.inject({
        method:"DELETE",
        url:"/teacher/"+secondID,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

  })


})