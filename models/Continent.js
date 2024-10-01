
const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
  name: String,
  code: String,
});

module.exports = mongoose.model('Continent', continentSchema);
