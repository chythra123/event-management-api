const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  date: Date,
  location: String,
  organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer' },
  attendees: [{
    attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
    registeredOn: { type: Date, default: Date.now }
  }],
  feedback: [{
    attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
    rating: Number,
    comment: String
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
