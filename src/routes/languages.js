const express = require('express');

const languagesService = require('../services/languages');

const languagesRouter = express.Router();

languagesRouter.get('/', async (req, res) => {
  try {
    const languages = await languagesService.getLanguages();

    if (languages) {
      res.json(languages);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

languagesRouter.get('/:id', async (req, res) => {
  try {
    const language = await languagesService.getLanguage(req.params.id);

    if (language) {
      res.json(language);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

languagesRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newLanguage = await languagesService.addLanguage(body);

    res.json(newLanguage);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = languagesRouter;
