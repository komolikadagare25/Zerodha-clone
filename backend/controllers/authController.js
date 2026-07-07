const firebaseAdmin = require("../config/firebaseAdmin");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");

const { UserModel } = require("../models/UserModel");
const { WalletModel } = require("../models/WalletModel");

const sendEmail = require("../utils/sendEmail");
const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Firebase token is required.",
      });
    }

    // Verify Firebase Token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

    const { uid, email, name } = decodedToken;

    // Check if user already exists
    let user = await UserModel.findOne({ email });

    // New User
    if (!user) {
      user = await UserModel.create({
        firebaseUID: uid,
        fullName: name,
        email,
        authProvider: "google",
        isVerified: true,
      });

      // Create Wallet
      await WalletModel.create({
        userId: user._id,
        balance: 100000,
      });
    }

    // Existing User
    else {
      user.lastLogin = new Date();
      user.isVerified = true;
      await user.save();
    }

    // Generate JWT
    const jwtToken = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token: jwtToken,
      user,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Authentication Failed",
      error: err.message,
    });
  }
};



const sendOTP = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("HEADERS:", req.headers);
    const { email, fullName } = req.body;

    let user = await UserModel.findOne({ email });



    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    if (!user) {
      user = await UserModel.create({
        email,
        fullName,
        authProvider: "email",
        isVerified: false,
        otp,
        otpExpiry,
      });
    } else {
      user.fullName = fullName;
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();
    }

    // TEMP: console log (later use nodemailer)
    // console.log("OTP SENT:", otp);
    await sendEmail(email, otp);

    res.json({
      message: "OTP sent successfully",
    });

  } catch (err) {
    console.log("SEND OTP ERROR:");
    console.log(err);

    res.status(500).json({
      message: "Failed to send OTP",
      error: err.message,
    });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check OTP
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Check Expiry
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    // Mark Verified
    user.isVerified = true;
    user.lastLogin = new Date();

    // Remove OTP after successful verification
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    // Create Wallet if not exists
    let wallet = await WalletModel.findOne({
      userId: user._id,
    });

    if (!wallet) {
      wallet = await WalletModel.create({
        userId: user._id,
        balance: 100000,
      });
    }

    // Generate JWT
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "OTP Verification Failed",
      error: err.message,
    });
  }
};
const getCurrentUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-otp -otpExpiry");

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch user",
    });
  }
};

const logout = async () => { }

module.exports = {
  googleLogin,
  sendOTP,
  getCurrentUser,
  verifyOTP,
  logout,
};