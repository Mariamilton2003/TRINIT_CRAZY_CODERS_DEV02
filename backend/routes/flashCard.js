const express = require('express');
const { isAuthenticated, authorizeRoles } = require('../middleware/authenticate');
const { createFlashCard, getAllFlashCard, getSingleFlashCard, updateFlashCard, deleteFlashCard } = require('../controllers/flashcardController');
const router = express.Router();

router.route('/create/flashCard').post(isAuthenticated,authorizeRoles('student'), createFlashCard);
router.route('/get/all/flashCard').get(isAuthenticated,authorizeRoles('student'), getAllFlashCard)
router.route('/get/flashCard/:id').post(isAuthenticated,authorizeRoles('student'), getSingleFlashCard)
router.route('/update/flashCard/:id').put(isAuthenticated,authorizeRoles('student'), updateFlashCard)
router.route('/delete/flashCard/:id').delete(isAuthenticated,authorizeRoles('student'), deleteFlashCard)

module.exports = router;