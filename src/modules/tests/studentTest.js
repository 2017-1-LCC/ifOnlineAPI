import model from '../student/Student';

describe("## Testando as rotas de Student",() => {

  const defaultObj = {
    nick:"hc3",
    registration:"2201"
  }

  beforeEach(done => {
    model.remove({})
      .then(obj => obj)
      .catch(err => err);
  })

  describe("TESTE DA ROTA /STUDENT", () => {
    it("Deve retornar uma lista com todos os dados",done => {
      request
        .get('/student')
        .end((err,res) => {
          expect(res.body[0].nick).to.eql(defaultObj.name);
          done(err);
        })
    })
  })

})