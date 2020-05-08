const mongoose = require('mongoose');

const URL = 'localhost:5000';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;