import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

    name: {
        type:String
    },
    birthDate: {
        type:Date
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref:'studygroup'
    }]

});

export default mongoose.model('teacher', TeacherSchema);
