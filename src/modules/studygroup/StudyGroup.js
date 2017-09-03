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
    }

};

export default mongoose.model('studygroup',new Schema(obj));