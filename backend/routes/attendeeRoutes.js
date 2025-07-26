const express = require('express');
const router = express.Router();
const { registerAttendee } = require('../controllers/attendeeController');
const { registerAttendeeValidator } = require('../validators/attendeeValidator');
const validate = require('../validators/validate');

router.post('/', registerAttendeeValidator, validate, registerAttendee);

module.exports = router;

