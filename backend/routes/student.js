const express = require('express');
const router = express.Router();
const {isAuthenticated, authorizeRoles} = require('../middleware/authenticate');
const { registerStudent, loginStudent, logoutStudent, getStudentProfile, updateStudent, changePassword, deleteStudent } = require('../controllers/studentController');

router.route('/student/register').post(registerStudent);
router.route('/student/login').get(loginStudent);
router.route('/student/logout').get(logoutStudent);
router.route('/student/myprofile').get(isAuthenticated, authorizeRoles('student') ,getStudentProfile);
router.route('/student/update/profile').put(isAuthenticated, authorizeRoles('student'),updateStudent);
router.route('/student/change/password').put(isAuthenticated,authorizeRoles('student'),changePassword);
router.route('/student/delete/account').delete(isAuthenticated,authorizeRoles('student'), deleteStudent);

module.exports = router;