import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const obj = {

    name: {
        type:String
    },
    birthDate: {
        type:Date
    },
    email: {
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref:'studygroup'
    }]

};

export default mongoose.model('teacher', new Schema(obj));
