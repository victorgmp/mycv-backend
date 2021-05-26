/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  level: {
    type: Number,
  },
  type: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

skillSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
