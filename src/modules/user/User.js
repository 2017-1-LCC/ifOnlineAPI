import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import crypto from 'crypto';

const obj = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String,
  provider: String,
  salt: String,
  facebook: {},
  twitter: {},
  google: {},
  github: {}
});


export default mongoose.model('user', obj);