const express = require('express');
const router = express.Router();
const { createOrganizer, getOrganizers, getOrganizerEvents } = require('../controllers/organizerController');
const { createOrganizerValidator } = require('../validators/organizerValidator');
const validate = require('../validators/validate');

router.post('/', createOrganizerValidator, validate, createOrganizer);
router.get('/', getOrganizers);
router.get('/:id/events', getOrganizerEvents);

module.exports = router;
