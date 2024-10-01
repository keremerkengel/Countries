
const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: String,
  code: String,
  emoji: String,
  continent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent'
  },
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language'
  }]
});

module.exports = mongoose.model('Country', countrySchema);
