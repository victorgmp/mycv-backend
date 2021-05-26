const express = require('express');

const educationService = require('../services/education');

const educationRouter = express.Router();

educationRouter.get('/', async (req, res) => {
  try {
    const educations = await educationService.getEducations();

    if (educations) {
      res.json(educations);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

educationRouter.get('/:id', async (req, res) => {
  try {
    const education = await educationService.getEducation(req.params.id);

    if (education) {
      res.json(education);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

educationRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newEducation = await educationService.addEducation(body);

    res.json(newEducation);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = educationRouter;
