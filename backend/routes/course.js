const express = require('express');
const router  = express.Router(); 
const {isAuthenticated, authorizeRoles} = require('../middleware/authenticate');
const {isAuthenticatedAdmin, authorizeAdminRoles} = require('../middleware/adminAuthenticate')
const { newCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse, createReview, getReviews, deleteReview } = require('../controllers/courseController');
const { isAuthenticatedFaculty, authorizeFacultyRoles } = require('../middleware/facultyAuthenticate');
// faculty based routes
router.route('/new/course').post(isAuthenticatedFaculty,authorizeFacultyRoles('faculty') ,newCourse);
router.route('/update/course/:id').put(isAuthenticatedFaculty, authorizeFacultyRoles('faculty') ,updateCourse);
router.route('/delete/course/:id').delete(isAuthenticatedFaculty,authorizeFacultyRoles('faculty') , deleteCourse);

// student based routes 
router.route('/all/course').get(isAuthenticated, authorizeRoles('student'),getAllCourse);
router.route('/course/:id').get(isAuthenticated ,authorizeRoles('student'),getSingleCourse);
router.route('/course/review').put(isAuthenticated,authorizeRoles('student'),createReview);

// admin based routes
router.route('/admin/all/reviews').get(isAuthenticatedAdmin, authorizeAdminRoles('admin'), getReviews);
router.route('/admin/delete/review').delete(isAuthenticatedAdmin, authorizeAdminRoles('admin'),deleteReview)
module.exports = router;