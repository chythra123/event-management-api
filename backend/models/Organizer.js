const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Organizer', organizerSchema);
