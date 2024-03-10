const express = require("express");
const {
  isAuthenticated,
  authorizeRoles,
} = require("../middleware/authenticate");
const {
  submitQuestion,
  getAllResult,
  getResult,
} = require("../controllers/answerController");
const router = express.Router();

// student routes
router
  .route("/generate/answer/:id")
  .post(isAuthenticated, authorizeRoles("student"), submitQuestion);
router
  .route("/get/all/answer")
  .get(isAuthenticated, authorizeRoles("student"), getAllResult);
router
  .route("/single/answer/:id")
  .get(isAuthenticated, authorizeRoles("student"), getResult);

module.exports = router;
