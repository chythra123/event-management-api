const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.date) filter.date = new Date(req.query.date);
    const events = await Event.find(filter);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerAttendeeForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.attendees.push({ attendeeId: req.body.attendeeId });
    await event.save();
    res.json({ message: 'Attendee registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitFeedback = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.feedback.push({
      attendeeId: req.body.attendeeId,
      rating: req.body.rating,
      comment: req.body.comment
    });
    await event.save();
    res.json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventAttendees = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('attendees.attendeeId');
    res.json(event.attendees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPopularEvents = async (req, res) => {
  try {
    const events = await Event.find();
    const sorted = events.sort((a, b) => b.attendees.length - a.attendees.length).slice(0, 5);
    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
