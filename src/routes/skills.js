const express = require('express');

const skillsService = require('../services/skills');

const skillsRouter = express.Router();

skillsRouter.get('/', async (req, res) => {
  try {
    const skills = await skillsService.getSkills();

    if (skills) {
      res.json(skills);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

skillsRouter.get('/:id', async (req, res) => {
  try {
    const skill = await skillsService.getSkill(req.params.id);

    if (skill) {
      res.json(skill);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

skillsRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newSkill = await skillsService.addSkill(body);

    res.json(newSkill);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = skillsRouter;
