const Organizer = require('../models/Organizer');
const Event = require('../models/Event');

exports.createOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.create(req.body);
    res.status(201).json(organizer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.json(organizers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrganizerEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizerId: req.params.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
