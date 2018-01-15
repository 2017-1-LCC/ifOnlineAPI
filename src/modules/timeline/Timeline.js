import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const TimelineSchema = new Schema({

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

export default mongoose.model('timeline', TimelineSchema);
