const express = require("express");

const router = express.Router();

const {
    googleLogin,
    sendOTP,
    verifyOTP,
    getCurrentUser,
    logout,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/google", googleLogin);

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);



router.get("/me", authMiddleware, getCurrentUser);

router.post("/logout", logout);

module.exports = router;