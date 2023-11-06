const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getallUsers,
  deleteuser,
  deleteuser1,
  getUserProfile1,
} = require("../controller/usersController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);
router.get("/getallusers", getallUsers);
router.post("/deleteuser", deleteuser);
router.delete("/deleteuser/:id", deleteuser1);
//get user profile Private Route

router.route("/profile").post(getUserProfile);
router.route("/profile/:id").get(getUserProfile1);
router.route("/update").put(updateUserProfile);

module.exports = router;
