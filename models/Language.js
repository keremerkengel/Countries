
const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: String,
  native: String,
  code: String,
});

module.exports = mongoose.model('Language', languageSchema);
