const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: t}
});

module.exports = mongoose.model('User', userSchema);