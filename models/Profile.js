const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  }
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile