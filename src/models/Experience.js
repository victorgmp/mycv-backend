/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');

const experienceSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tecnologies: [{
    type: String,
    required: true,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

experienceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Experience = model('Experience', experienceSchema);

module.exports = Experience;
