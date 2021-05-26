const express = require('express');

const experiencesService = require('../services/experience');

const experienceRouter = express.Router();

experienceRouter.get('/', async (req, res) => {
  try {
    const experiences = await experiencesService.getExperiences();

    if (experiences) {
      res.json(experiences);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

experienceRouter.get('/:id', async (req, res) => {
  try {
    const experience = await experiencesService.getExperience(req.params.id);

    if (experience) {
      res.json(experience);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

experienceRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newExperience = await experiencesService.addExperience(body);

    res.json(newExperience);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = experienceRouter;
