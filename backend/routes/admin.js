const express = require('express');
const { registerAdmin, loginAdmin, logoutAdmin, getProfile, changePassword, updateAdmin } = require('../controllers/adminController');
const {isAuthenticatedAdmin} = require('../middleware/adminAuthenticate')
const router = express.Router();

router.route('/admin/register').post(registerAdmin)
router.route('/admin/login').get(loginAdmin)
router.route('/admin/logout').get(logoutAdmin);
router.route('/admin/myprofile').get(isAuthenticatedAdmin ,getProfile);
router.route('/admin/changePassword').put(isAuthenticatedAdmin,changePassword);
router.route('/admin/update').put(isAuthenticatedAdmin,updateAdmin);
module.exports = router;