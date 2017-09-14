import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const obj = new Schema({

    admin: {
        type:Schema.Types.ObjectId,
        ref:'teacher' 
    },
    discipline: {
        type:String,
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
    students: [{
        type:Schema.Types.ObjectId,
        ref:'student'
    }],
    // prova
    proof: [{
        subjects:String,
        dateProof:Date,
        value:Number
    }]

});

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



export default mongoose.model('studygroup',obj);