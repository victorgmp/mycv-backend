const express = require('express');

const userService = require('../services/users');

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await userService.getUsers();

    if (users) {
      res.json(users);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

usersRouter.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newUser = await userService.addUser(body);

    res.json(newUser);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = usersRouter;
