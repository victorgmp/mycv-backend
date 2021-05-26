const Skill = require('../models/Skill');

const getSkills = async () => {
  const skills = await Skill.find({});

  return skills;
};

const getSkill = async (id) => {
  const skill = await Skill.findById(id);

  return skill;
};

const addSkill = async (data) => {
  const skill = new Skill(data);

  const savedSkill = await skill.save();

  return savedSkill;
};

module.exports = { getSkills, getSkill, addSkill };
