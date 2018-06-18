import db from '../config/db';
import modelStudyGroup from '../studygroup/StudyGroup'; 
import modelUser from '../user/User'; 
import modelTeacher from '../teacher/Teacher'; 
import modelStudent from '../student/Student'; 

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

describe("## TESTANDO FUNCIONALIDADES INTEGRADAS", () => {

    //console.log("model user: ", modelUser.collection.drop().exec());
    before((done) => {
      console.log("executando before...");
      console.log(db.cleanDatabase());
      //modelUser.collection.drop();
      //modelUser.findOneAndRemove({_id:idStudent}, err => console.log(err));
      done();
    });

    after((done) => {
      console.log("executando after...");
      console.log(db.cleanDatabase());
      //modelUser.collection.drop();
      //modelUser.findOneAndRemove({_id:idStudent}, err => console.log(err));
      done();
    });

    before(done => {

        Server.inject({
          method:"POST",
          url:"/user",
          payload: JSON.stringify(userStudent)
        })
        .then(res => {
          idStudent = res.result._id;
        })
        .catch(err => {
          cosole.log("erro ao inserir usuário estudante: ",err);
        })

      Server.inject({
        method:"POST",
        url:"/user",
        payload: JSON.stringify(userTeacher)
      })
      .then(res => {
        idTeacher = res.result._id;
      })
      .catch(err => {
        console.log("error ao inserir usuário professor: ",err);
      })

      Server.inject({
        method:"POST",
        url:"/login",
        payload: JSON.stringify(userStudent)
      })
      .then(res => {
        token = res.result.token;
      })
      .catch(err => {
        console.log("error ao fazer login: ",err);
      })
      
      done();

    })


  describe("PROFESSOR CRIANDO GRUPO DE ESTUDO ", () => {

    console.log("idTeahcer: ",idTeacher);
    console.log("idStudent: ",idStudent);
    console.log("idGroup: ",idGroup);
    console.log("token: ",token);

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
      })

      done();
    })

    it("/REMOVE/{IDSTUDENT}/INGROUP/{IDGROUP} DEVE REMOVER ESTUDANTE AO GRUPO", done => {

      Server.inject({
        method:'POST',
        url:'/remove/'+idStudent+'/ingroup/'+idGroup,
        headers: {  
          'Authorization':'Bearer '+token
        }
      }, res => {
        expect(res.statusCode).to.eql(200);
      })

      done();
    })

    it("/ADD/{IDSTUDENT}/INGROUP/{IDGROUP} DEVE ADD ESTUDANTE AO GRUPO", done => {

      Server.inject({
        method:'POST',
        url:'/add/'+idStudent+'/ingroup/'+idGroup,
        headers: {  
          'Authorization':'Bearer '+token
        }
      }, res => {
        expect(res.statusCode).to.eql(200);
      })
      
      done();
    })

  })

/*
*/

})