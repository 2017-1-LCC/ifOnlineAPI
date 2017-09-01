import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  name: {
    type:String,
    require:true
  },
  password: {
    type:String,
    require:true
  },
});

UserSchema
  .path('name')
  .validate(function(value, respond) {
    var self = this;
    return this.constructor.findOne({ name: value })
      .then(function(user) {
        if (user) {
          if (self.id === user.id) {
            return respond(true);
          }
          return respond(false);
        }
        return respond(true);
      })
      .catch(function(err) {
        throw err;
      });
  }, 'esse login já está em uso.');

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);
    
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    })
  })
  
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

export default mongoose.model('user', UserSchema);