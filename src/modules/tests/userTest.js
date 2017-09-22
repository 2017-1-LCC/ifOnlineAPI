import model from  '../user/User';

describe("## TESTANDO FUNCIONALIDADES DO USUÁRIO", () => {

  const defaultObj = {
    username:'teste01',
    password:'teste',
    typeUser:'STUDENT',
    name:"Eliel das Virgens",
    birthDate:"2017-09-21",
    email:"eliel.floyd@bol.com.br",
    user:"",
    groups:[]
  };

  let id, token, secondID;

  before(done => {
    model.remove({})
      .then(() => null)
    done();
  })

  before(done => {
      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(defaultObj)
      },res => {
        id = res.result._id;
        done();
      })
  })

  describe("BUSCA TODOS OS USUÁRIOS SEM USO DO TOKEN", () => {
    it("DEVE RETORNAR 401 ( SEM PERMISSÃO )", done => {
      Server.inject({
        method:"GET",
        url:"/user"
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
        payload: JSON.stringify(defaultObj)
      },res => {
        token = res.result.token;
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER -> BUSCA TODOS OS USUÁRIOS", done => {
      Server.inject({
        method:"GET",
        url:"/user",
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.result).to.be.an('array');
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER/{id} -> BUSCA USUÁRIO POR ID", done => {
      Server.inject({
        method:"GET",
        url:"/user/"+id,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER/{name} -> BUSCA USUÁRIO POR USERNAME", done => {
      Server.inject({
        method:"GET",
        url:"/finduserbyusername/"+defaultObj.username,
        headers: {  
          'Authorization':'Bearer '+token
        }
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER -> CRIA NOVO USUÁRIO", done => {
      const defaultObj2 = {
        username:'teste02',
        password:'teste',
        typeUser:'STUDENT'
      };

      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(defaultObj2)
      },res => {
        secondID = res.result._id;
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER/{id} -> ATUALIZA USUÁRIO", done => {
      const defaultObjUpdated = {
        username:'teste02 - atualizado',
        password:'teste',
        typeUser:'STUDENT'
      };

      Server.inject({
        method:"PUT",
        url:"/user/"+secondID,
        headers: {  
          'Authorization':'Bearer '+token
        },
        payload: JSON.stringify(defaultObjUpdated)
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

    it("/USER/{id} -> REMOVE USUÁRIO", done => {

      Server.inject({
        method:"DELETE",
        url:"/user/"+secondID,
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