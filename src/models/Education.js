/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');

const educationSchema = new Schema({
  title: {
    type: String,
    minlength: 4,
    required: true,
  },
  institute: {
    type: String,
    minlength: 4,
    required: true,
  },
  from: Date,
  to: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

educationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Education = model('Education', educationSchema);

module.exports = Education;
