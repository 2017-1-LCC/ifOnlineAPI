import model from '../student/Student';
import modelUser from  '../user/User';

describe("## TESTANDO FUNCIONALIDADES DO ESTUDANTE",() => {

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
        url:"/student",
        payload: JSON.stringify(defaultObj)
      },res => {
        id = res.result.id
        done();
      })
  })

  describe("BUSCA TODOS OS ESTUDANTES SEM USO DO TOKEN", () => {
    it("DEVE RETORNAR 401 ( SEM PERMISSÃO )", done => {
      Server.inject({
        method:"GET",
        url:"/student"
      },res => {
        expect(res.statusCode).to.eql(401);
      })
        done();
    })
  })

  describe("EXECUTA REQUESTS USANDO TOKEN", () => {

    it("/LOGIN -> DEVE FAZER LOGIN", done => {
      Server.inject({
        method:"POST",
        url:"/login",
        payload: JSON.stringify(user)
      },res => {
        token = res.result.token;
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

    it("/STUDENT -> BUSCA TODOS OS ESTUDANTES", done => {
      Server.inject({
        method:"GET",
        url:"/student",
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.result).to.be.an('array');
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

    it("/STUDENT/{id} -> BUSCA ESTUDANTE POR ID", done => {
      Server.inject({
        method:"GET",
        url:"/student/"+id,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
      })
        done();
    })
//VERIFICAR
    it("/STUDENT/{name} -> BUSCA ESTUDANTE POR USERNAME", done => {
      Server.inject({
        method:"GET",
        url:"/finduserbyusername/"+defaultObj.username,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

    it("/STUDENT -> CRIA NOVO ESTUDANTE", done => {

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
        url:"/student",
        payload: JSON.stringify(defaultObj2)
      },res => {
        secondID = res.result._id;
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

    it("/STUDENT/{id} -> ATUALIZA ESTUDANTE", done => {

      const defaultObjUpdated = {
        name:"teste02 - updated",
        birthDate:"2017-09-20",
        email:"teste02-updated@mail.com"
      };

      Server.inject({
        method:"PUT",
        url:"/student/"+secondID,
        headers: {  
          'Authorization':'Bearer '+token
        },
        payload: JSON.stringify(defaultObjUpdated)
      },res => {
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

    it("/STUDENT/{id} -> REMOVE ESTUDANTE", done => {

      Server.inject({
        method:"DELETE",
        url:"/student/"+secondID,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
      })
        done();
    })

  })


})