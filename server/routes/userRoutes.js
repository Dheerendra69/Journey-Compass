const express = require("express");

const router = express.Router();
const userController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");
// /api/users/login
router.post("/users/login", userController.userLogin);

// /api/users

router.post("/users", userController.registerUser);

//get the current user
router.get("/user", verifyJWT, userController.getCurrentUser);

//update the user
router.put("/user", verifyJWT, userController.updateUser);

// get user details
router.get("/profile", userController.profileController);

module.exports = router;
