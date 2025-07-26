const { body } = require('express-validator');

exports.createEventValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('date').notEmpty().withMessage('Date is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('organizerId').notEmpty().withMessage('Organizer ID is required'),
];

exports.feedbackValidator = [
  body('attendeeId').notEmpty().withMessage('Attendee ID is required'),
  body('rating').isNumeric().withMessage('Rating must be a number'),
  body('comment').optional().isString(),
];

exports.registerEventValidator = [
  body('attendeeId').notEmpty().withMessage('Attendee ID is required')
];
