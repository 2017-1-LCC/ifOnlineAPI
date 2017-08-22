import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const obj = {

    nick: {
        type:String,
        require:true
    },
    registration: {
        type:String,
        require:true
    },
    info: {
        name: {
            type:String
        },
        age: {
            type:Number
        },
        birthDate: {
            type:Date
        },
        email: {
            type:String
        }

    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref:'studygroup'
    }]

};

export default mongoose.model('student', new Schema(obj));
