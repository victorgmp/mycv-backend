const Courses = require('../models/Course');

const getCourses = async () => {
  const courses = await Courses.find({});

  return courses;
};

const getCourse = async (id) => {
  const course = await Courses.findById(id);

  return course;
};

const addCourse = async (data) => {
  const course = new Courses(data);

  const savedCourse = await course.save();

  return savedCourse;
};

module.exports = { getCourses, getCourse, addCourse };
