const express = require('express');
const { isAuthenticatedFaculty, authorizeFacultyRoles } = require('../middleware/facultyAuthenticate');
const { createFeedBack, sendFeedBack, getFeedBack } = require('../controllers/feedbackController');
const { isAuthenticated, authorizeRoles } = require('../middleware/authenticate');
const router = express.Router();

//faculty based routes
router.route('/create/feedback').post(isAuthenticatedFaculty, authorizeFacultyRoles('admin'), createFeedBack);
router.route('/send/feedback').post(isAuthenticatedFaculty, authorizeFacultyRoles('admin'), sendFeedBack);

// student based routes
router.route('/get/feedback').get(isAuthenticated, authorizeRoles('student'), getFeedBack);

module.exports = router;
