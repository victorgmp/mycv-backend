/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');

const languageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

languageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Language = model('Language', languageSchema);

module.exports = Language;
