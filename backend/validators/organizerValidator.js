const { body } = require('express-validator');

exports.createOrganizerValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
];
