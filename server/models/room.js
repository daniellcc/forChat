const mongoose = require('mongoose');

const UserSchema = require('./user');

const Schema = mongoose.Schema({
  receivedUsers: [UserSchema],
  totalMessages: Number
});

const roomSchema = mongoose.model('Room', Schema);

module.exports = roomSchema;