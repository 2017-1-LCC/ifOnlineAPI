import model from '../student/Student';

describe("## Testando as rotas de Student",() => {

  const defaultObj = {
    nick:"hc3",
    registration:"2201"
  }

  let id;

  beforeEach(done => {
    model.remove({})
      .then(() => model.create(defaultObj))
      .then(obj => id = obj._id);

      done();
  })

  describe("TESTE DA ROTA /STUDENT", () => {

    it("statusCode deve retornar 200: ",done => {
      Server.inject({
        method:"GET",
        url:"/student"
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    });

    it("Deve retornar um array: ",done => {
      Server.inject({
        method:"GET",
        url:"/student"
      },res => {
        expect(res.result).to.be.an('array');
        done();
      })
    });

  });

  describe("TESTE DA ROTA /STUDENT/:ID",() => {

    it("Deve retornar statusCode 200: ",done => {
      Server.inject({
        method:"GET",
        url:"/student/"+id
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    })

  })

  describe("TESTE DA ROTA /STUDENT/:ID",() => {

    it("Deve retornar statusCode 200: ",done => {
      Server.inject({
        method:"GET",
        url:"/student/"+id
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    });

    it("Deve fazer update no nick do estudante: ",done => {
      Server.inject({
        method:"PUT",
        url:"/student/"+id,
        payload: JSON.stringify({nick:"updated"})
      },res => {
        expect(res.statusCode).to.eql(200);
        done();
      })
    });
  })


})