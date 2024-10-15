// models/ResetPassword.js
const mongoose = require('mongoose');

const resetPasswordSchema = new mongoose.Schema({
    email: String,
    token: String,
    createdAt: { type: Date, expires: '1h', default: Date.now }
});

module.exports = mongoose.model('ResetPassword', resetPasswordSchema);