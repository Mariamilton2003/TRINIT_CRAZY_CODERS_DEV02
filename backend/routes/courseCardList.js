const express = require('express');
const router = express.Router();
const {isAuthenticatd, authorizeRoles} = require('../middleware/authenticate');
const { createCard, getAllcards, getSingleCard, updateCard, deleteCard } = require('../controllers/courseCardListController');

router.route('/create/course/card/list').post(isAuthenticatd, authorizeRoles('student'),createCard)
router.route('/all/course/card/list').get(isAuthenticatd, authorizeRoles('student'),getAllcards)
router.route('/create/course/card/list').get(isAuthenticatd, authorizeRoles('student'),getSingleCard)
router.route('/create/course/card/list').put(isAuthenticatd, authorizeRoles('student'),updateCard)
router.route('/create/course/card/list').delete(isAuthenticatd, authorizeRoles('student'),deleteCard)

module.exports = router;