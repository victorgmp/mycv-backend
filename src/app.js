const express = require('express');
const cors = require('cors');
require('express-async-errors');
const morgan = require('morgan');
const helmet = require('helmet');

const config = require('./utils/config');
const logger = require('./utils/logger');
const { notFoundHandler, errorHandler } = require('./utils/middleware');

const usersRouter = require('./routes/users');
const experienceRouter = require('./routes/experience');
const skillsRouter = require('./routes/skills');
const educationRouter = require('./routes/education');
const coursesRouter = require('./routes/courses');
const languagesRouter = require('./routes/languages');

const app = express();

logger.info('connecting to database...');
require('./utils/db');

require('./models/Course');
require('./models/Language');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Welcome!!!');
});

app.use('/api/users', usersRouter);
app.use('/api/experience', experienceRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/education', educationRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/languages', languagesRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
