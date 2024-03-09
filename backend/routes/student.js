const express = require('express');
const router = express.Router();
const {isAuthenticated} = require('../middleware/authenticate');
const { registerStudent, loginStudent, logoutStudent, getStudentProfile, updateStudent, changePassword, deleteStudent } = require('../controllers/studentController');

router.route('/student/register').post(registerStudent);
router.route('/student/login').get(loginStudent);
router.route('/student/logout').get(logoutStudent);
router.route('/student/myprofile').get(isAuthenticated,getStudentProfile);
router.route('/student/update/profile').put(isAuthenticated,updateStudent);
router.route('/student/change/password').put(isAuthenticated,changePassword);
router.route('/student/delete/account').delete(isAuthenticated, deleteStudent);

module.exports = router;