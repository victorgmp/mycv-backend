const User = require('../models/User');

const getUsers = async () => {
  const users = await User
    .find({})
    .populate('experience')
    .populate('skills')
    .populate('education')
    .populate('courses')
    .populate('languages');

  return users;
};

const getUser = async (id) => {
  const user = await User
    .findById(id)
    .populate('experience')
    .populate('skills')
    .populate('education')
    .populate('courses')
    .populate('languages');

  return user;
};

const addUser = async (data) => {
  const user = new User(data);

  const savedUser = await user.save();

  return savedUser;
};

module.exports = { getUsers, getUser, addUser };
