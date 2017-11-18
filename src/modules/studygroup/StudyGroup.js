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
    description: {
        type:String,
        require:true
    },
    // turma exemplo 2017.1 esse campo sai e vai para o student
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
    classSchedule: [{
        dayOfWeek:String,
        startTime:String,
        endTime:String,
        removed:Boolean
    }],
    // prova
    proof: [{
        subjects:String,
        dateProof:Date,
        value:Number,
        removed:Boolean
    }],
    //atividade programada
    scheduledActivity: [{
        description:String,
        sendDate:Date,
        deliveryDate:Date,
        removed:Boolean
    }]
});

obj.pre('findOneAndUpdate',function(next) {
    var group = this;
    
    group._update.classSchedule = group._update.classSchedule.filter(el => !el.removed );
    group._update.proof = group._update.proof.filter(el => !el.removed );
    group._update.scheduledActivity = group._update.scheduledActivity.filter(el => !el.removed );

    next();
})

export default mongoose.model('studygroup',obj);