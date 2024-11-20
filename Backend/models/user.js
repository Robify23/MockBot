const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  university: { type: String, default: '' },
  technicalField: { type: String, default: '' },
  eqScores: [
    {
      score: Number,
      date: { type: Date, default: Date.now },
    },
  ],
  iqScores: [
    {
      score: Number,
      date: { type: Date, default: Date.now },
    },
  ],
});


// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
