const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, minlength: [2, 'First name must be at least 2 characters'],},
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: [8, 'Password must be at least 8 characters'],  },
});

module.exports = mongoose.model('User', UserSchema);