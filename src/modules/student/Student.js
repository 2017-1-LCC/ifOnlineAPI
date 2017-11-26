import mongoose from 'mongoose';
const Schema = mongoose.Schema;

function toLower (v) {
  return v.toLowerCase();
}

const StudentSchema = new Schema({

    name: {
        type:String
    },
    birthDate: {
        type:Date
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref:'studygroup'
    }]

});

export default mongoose.model('student', StudentSchema);
