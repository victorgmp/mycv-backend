/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  name: {
    type: String,
    minlength: 4,
    required: true,
  },
  institute: {
    type: String,
    minlength: 4,
    required: true,
  },
  year: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

courseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Course = model('Course', courseSchema);

module.exports = Course;
