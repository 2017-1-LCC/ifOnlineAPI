import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const obj = {

    admin: {
        type:Schema.Types.ObjectId,
        ref:'Student' 
    },
    teacher: {
        type:Schema.Types.ObjectId,
        ref:'Teacher' 
    },
    students: [{
        type:Schema.Types.ObjectId,
        ref:'Student'
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

export default mongoose.model('student',new Schema(obj));