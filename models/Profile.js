const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  yearofStudy: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  nameoftheHostel: {
    type: String,
  },
  floorNumber: {
    type: String,
  },
  roomNumber: {
    type: String,
  },
  bedNumber: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
