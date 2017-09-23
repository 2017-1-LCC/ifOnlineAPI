import model from '../studygroup/StudyGroup';
import modelUser from '../user/User';
import modelTeacher from '../teacher/Teacher';
import modelStudent from '../student/Student';

describe("## TESTANDO FUNCIONALIDADES INTEGRADAS", () => {

    const userStudent = {
      username:'Zezinho Estudante',
      password:'12345',
      typeUser:'STUDENT',
      name:"Zezinho da Silva Sauro",
      birthDate:"2017-09-20",
      email:"zezinho-student@mail.com",
      user:null
    };

    const userTeacher = {
      username:'userTeacher',
      password:'12345',
      typeUser:'TEACHER',
      name:"testeTeacher",
      birthDate:"2017-09-20",
      email:"teacher@mail.com",
      user:null
    };

    const studygroup = {
      admin:null,
      discipline:'MATEMATICA',
      academiClass:'2017.1',
      dateStart:'2017-05-21',
      dateEnd:'2017-12-11',
      students:[],
      proof:[]
    }

    let idTeacher, idStudent, idGroup, token;
    
    before(done => {
      model.remove({})
        .then(() => null)
      done();
    })

    before(done => {
      modelUser.remove({})
        .then(() => null)
      done();
    })

    before(done => {
      modelTeacher.remove({})
        .then(() => null)
      done();
    })

    before(done => {
      modelStudent.remove({})
        .then(() => null)
      done();
    })

    before(done => {
        Server.inject({
          method:"POST",
          url:"/user",
          payload: JSON.stringify(userStudent)
        },res => {
            idStudent = res.result._id;
            done()
        })
    })

    before(done => {
      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(userTeacher)
      },res => {
            idTeacher = res.result._id;
            done()
      })
    })

    before(done => {
        Server.inject({
          method:"POST",
          url:"/login",
          payload: JSON.stringify(userStudent)
        }, res => {
          token = res.result.token;
          done()
        })
    })
  
  describe("PROFESSOR CRIANDO GRUPO DE ESTUDO ", () => {
    it("/STUDYGROUP -> DEVE CADASTRAR UM GRUPO DE ESTUDO", done => {
      studygroup.admin = idTeacher;
      Server.inject({
        method:"POST",
        url:"/studygroup",
        headers: {  
          'Authorization':'Bearer '+token
        },
        payload: JSON.stringify(studygroup)
      },res => {
        idGroup = res.result._id
        expect(res.statusCode).to.eql(200);
        done()
      })
    })
  })

  describe("ALUNO ENTRA NO GRUPO DE ESTUDO", () => {
    it("/ADD/{IDSTUDENT}/INGROUP/{IDGROUP} DEVE ADD ESTUDANTE AO GRUPO", done => {

      Server.inject({
        method:'POST',
        url:'/add/'+idStudent+'/ingroup/'+idGroup,
        headers: {  
          'Authorization':'Bearer '+token
        }
      }, res => {
        expect(res.statusCode).to.eql(200);
        done()
      })
    })
  })

  describe("ALUNO SAI OU É REMOVIDO DO GRUPO DE ESTUDO", () => {
    it("/REMOVE/{IDSTUDENT}/INGROUP/{IDGROUP} DEVE REMOVER ESTUDANTE AO GRUPO", done => {

      Server.inject({
        method:'POST',
        url:'/remove/'+idStudent+'/ingroup/'+idGroup,
        headers: {  
          'Authorization':'Bearer '+token
        }
      }, res => {
        expect(res.statusCode).to.eql(200);
        done()
      })
    })
  })

})