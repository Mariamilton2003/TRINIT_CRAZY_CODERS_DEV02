const express = require('express');
const router = express.Router();
const {isAuthenticatedFaculty,authorizeFacultyRoles} = require('../middleware/facultyAuthenticate');
const { registerFaculty, loginFaculty, logoutFaculty, getFacultyProfile, updateFaculty, changePasswordFaculty, deleteFaculty, getAllFaculty } = require('../controllers/facultyController');
const { isAuthenticated } = require('../middleware/authenticate');


router.route('/faculty/register').post(registerFaculty);
router.route('/faculty/login').get(loginFaculty);
router.route('/faculty/logout').get(logoutFaculty);
router.route('/faculty/myprofile').get(isAuthenticatedFaculty,authorizeFacultyRoles('faculty') ,getFacultyProfile);
router.route('/faculty/update/profile').put(isAuthenticatedFaculty, authorizeFacultyRoles('faculty') ,updateFaculty);
router.route('/faculty/change/password').put(isAuthenticatedFaculty, authorizeFacultyRoles('faculty') ,changePasswordFaculty);
router.route('/faculty/delete/account').delete(isAuthenticatedFaculty ,authorizeFacultyRoles('faculty') , deleteFaculty);

//  student based routes
router.route('/faculty/all').get(isAuthenticated, getAllFaculty)
module.exports = router;