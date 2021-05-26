const Languages = require('../models/Language');

const getLanguages = async () => {
  const languages = await Languages.find({});

  return languages;
};

const getLanguage = async (id) => {
  const language = await Languages.findById(id);

  return language;
};

const addLanguage = async (data) => {
  const language = new Languages(data);

  const savedLanguage = await language.save();

  return savedLanguage;
};

module.exports = { getLanguages, getLanguage, addLanguage };
