// models/RefreshToken.js
const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  token: String,
  expires: Date,
});

module.exports = mongoose.model('RefreshToken', refreshTokenSchema);