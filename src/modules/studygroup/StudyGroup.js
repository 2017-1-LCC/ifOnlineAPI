import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const obj = {

    admin: {
        type:Schema.Types.ObjectId,
        ref:'student' 
    },
    teacher: {
        type:Schema.Types.ObjectId,
        ref:'teacher' 
    },
    students: [{
        type:Schema.Types.ObjectId,
        ref:'student'
    }],
    //mudar para discipline.
    matter: {
        type:String,
        require:true
    },
    local: {
        type:String,
        require:true
    },
    numMax: {
        type:Number,
        require:true
    },
    // turma exemplo 2017.1
    academicClass: {
        type:String,
        require:true
    },
    // data inicio da materia
    dateStart: {
        type:Date,
        require:true
    },
    // data final da materia
    dateEnd: { 
        type:Date,
        require:true
    },
    // prova
    proof: [{
        subjects:String,
        dateProof:Date,
        value:Number
    }]

};


/*


turma:{2017.1},
disciplina:{ppp1},
data_inicio:{data em que inicia a disciplina},
data_final:{data em que se encerra a disciplina},
provas:[{
  assuntos:[assunto1, assunto2, assunto3],
  data:{data da prova},
  peso:{prova vale 10?}
}],


*/



export default mongoose.model('studygroup',new Schema(obj));