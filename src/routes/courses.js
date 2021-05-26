const express = require('express');

const coursesService = require('../services/courses');

const coursesRouter = express.Router();

coursesRouter.get('/', async (req, res) => {
  try {
    const courses = await coursesService.getCourses();

    if (courses) {
      res.json(courses);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

coursesRouter.get('/:id', async (req, res) => {
  try {
    const course = await coursesService.getCourse(req.params.id);

    if (course) {
      res.json(course);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

coursesRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newCourse = await coursesService.addCourse(body);

    res.json(newCourse);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = coursesRouter;
