import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: 'User name cannot be blank'
  },
  email: {
    type: String,
    required: 'User email cannot be blank',
    unique: true
  },
  password: {
    type: String,
    required: 'Password cannot be blank'
  }
}, { collection: 'user' });

const User = mongoose.model('User', UserSchema);

export default User;