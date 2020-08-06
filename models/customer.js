const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  facts: [factSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);