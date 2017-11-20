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
    email: {
        type:String,
        set: toLower,
        require:true,
        unique:true
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

StudentSchema
  .path('email')
  .validate(function(value, respond) {
    var self = this;
    return this.constructor.findOne({ email: toLower(value) })
      .then(function(student) {
        if (student) {
          if (self._id === student._id) {
            return respond(true);
          }
          return respond(false);
        }
        return respond(true);
      })
      .catch(function(err) {
        throw err;
      });
  }, 'esse email já está em uso.');

export default mongoose.model('student', StudentSchema);
