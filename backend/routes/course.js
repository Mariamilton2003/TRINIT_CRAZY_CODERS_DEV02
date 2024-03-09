const express = require('express');
const router  = express.Router(); 
const {isAuthenticated} = require('../middleware/authenticate');
const {isAuthenticatedAdmin} = require('../middleware/adminAuthenticate')
const { newCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse, createReview, getReviews, deleteReview } = require('../controllers/courseController');
const { isAuthenticatedFaculty } = require('../middleware/facultyAuthenticate');
// faculty based routes
router.route('/new/course').post(isAuthenticatedFaculty, newCourse);
router.route('/update/course/:id').put(isAuthenticatedFaculty,updateCourse);
router.route('/delete/course/:id').delete(isAuthenticatedFaculty,deleteCourse);

// student based routes 
router.route('/all/course').get(isAuthenticated,getAllCourse);
router.route('/course/:id').get(isAuthenticated,getSingleCourse);
router.route('/course/review').put(isAuthenticated,createReview);

// admin based routes
router.route('/admin/all/reviews').get(isAuthenticatedAdmin, getReviews);
router.route('/admin/delete/review').delete(isAuthenticatedAdmin,deleteReview)
module.exports = router;