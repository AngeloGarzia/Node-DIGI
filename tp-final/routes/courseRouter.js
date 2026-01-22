const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const {createUpdate} = require("../validator/courseValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middlewares/authMiddleware");

// Routes Public 
router.get('/level/:level',courseController.getByLevel);
router.get("/", courseController.getAllCourse);
router.get("/:id",courseController.getCourseById);



router.post("/", authMiddleware,courseController.createCourse);
router.put("/:id",authMiddleware, courseController.updateCourse);
router.delete("/:id",authMiddleware,courseController.deleteCourse);

module.exports = router;