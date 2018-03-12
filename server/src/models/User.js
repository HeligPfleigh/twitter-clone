import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import constants from '../config/constants';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  avatar: String,
  password: String,
  email: String,
}, {
  timestamps: true,
});

UserSchema.pre('save', function saveHook(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = this.m_hashPassword(this.password);
  return next();
});

UserSchema.methods = {
  m_hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        _id: this._id,
      },
      constants.JWT_SECRET,
    );
  },
};

export default mongoose.model('User', UserSchema);
