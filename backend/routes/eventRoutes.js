const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerAttendeeForEvent,
  submitFeedback,
  getEventAttendees,
  getPopularEvents
} = require('../controllers/eventController');

const { createEventValidator, feedbackValidator, registerEventValidator } = require('../validators/eventValidator');
const validate = require('../validators/validate');

router.post('/', createEventValidator, validate, createEvent);
router.get('/', getEvents);
router.get('/popular', getPopularEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.post('/:id/register', registerEventValidator, validate, registerAttendeeForEvent);
router.post('/:id/feedback', feedbackValidator, validate, submitFeedback);
router.get('/:id/attendees', getEventAttendees);

module.exports = router;
