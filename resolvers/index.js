
const Continent = require('../models/Continent');
const Country = require('../models/Country');
const Language = require('../models/Language');

const resolvers = {
  Query: {
    countries: () => Country.find().populate('continent').populate('languages'),
    country: (_, { code }) => Country.findOne({ code }).populate('continent').populate('languages'),
    continents: () => Continent.find(),
    continent: (_, { code }) => Continent.findOne({ code }),
    languages: () => Language.find(),
    language: (_, { code }) => Language.findOne({ code })
  },
  Country: {
    continent: (country) => Continent.findById(country.continent),
    languages: (country) => Language.find({ _id: { $in: country.languages } })
  }
};

module.exports = resolvers;
