import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import crypto from 'crypto';

const obj = new Schema({
  name: String,
  password: String,
});


export default mongoose.model('user', obj);