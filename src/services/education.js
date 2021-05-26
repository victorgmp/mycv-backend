const Education = require('../models/Education');

const getEducations = async () => {
  const educations = await Education.find({});

  return educations;
};

const getEducation = async (id) => {
  const education = await Education.findById(id);

  return education;
};

const addEducation = async (data) => {
  const education = new Education(data);

  const savedEducation = await education.save();

  return savedEducation;
};

module.exports = { getEducations, getEducation, addEducation };
