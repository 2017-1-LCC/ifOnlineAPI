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
    groups: [{
        type: Schema.Types.ObjectId,
        ref:'StudyGroup'
    }]

};

module.exports = mongoose.model('student', new Schema(obj));
//export default mongoose.model('student', new Schema(obj));
