const express = require('express');
const { isAuthenticatedFaculty, authorizeFacultyRoles } = require('../middleware/facultyAuthenticate');
const { createQuestion, updateQuestion, deleteQuestion, getAllQuestions, getSingleQuestion } = require('../controllers/questionController');
const { isAuthenticated, authorizeRoles } = require('../middleware/authenticate');
const router = express.Router();

//faculty based routes
router.route('/question/create').post(isAuthenticatedFaculty,authorizeFacultyRoles('faculty'), createQuestion);
router.route('/question/update/:id').put(isAuthenticatedFaculty,authorizeFacultyRoles('faculty'),updateQuestion);
router.route('/question/delete/:id').put(isAuthenticatedFaculty,authorizeFacultyRoles('faculty'),deleteQuestion);

//student based routes

router.route('/all/question').get(isAuthenticated, authorizeRoles('student'),getAllQuestions);
router.route('/question/:id').get(isAuthenticated,authorizeRoles('student'),getSingleQuestion);

module.exports = router;