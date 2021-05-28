/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 4,
    required: true,
  },
  firtsName: {
    type: String,
    minlength: 2,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
  },
  summary: String,
  links: [{ type: String }],
  interests: [{ type: String }],
  experience: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Experience',
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
  education: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Education',
    },
  ],
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Language',
    },
  ],
},
{
  timestamps: true,
  versionKey: false,
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = model('User', userSchema);

module.exports = User;
