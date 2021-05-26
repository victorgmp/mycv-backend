const Experience = require('../models/Experience');

const getExperiences = async () => {
  const experiences = await Experience.find({});

  return experiences;
};

const getExperience = async (id) => {
  const experience = await Experience.findById(id);

  return experience;
};

const addExperience = async (data) => {
  const experience = new Experience(data);

  const savedExperience = await experience.save();

  return savedExperience;
};

module.exports = { getExperiences, getExperience, addExperience };
