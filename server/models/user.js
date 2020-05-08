const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {type: String, unique: true},
  messages: [{ time: Date }]
});

const userSchema = mongoose.model('User', Schema);

module.exports = userSchema;