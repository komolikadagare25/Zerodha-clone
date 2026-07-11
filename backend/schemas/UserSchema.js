const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    firebaseUID: {
      type: String,
      default: null,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    authProvider: {
      type: String,
      enum: ["google", "email"],
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    // NEW
    otp: {
      type: String,
      default: null,
    },

    otpExpiry: {
      type: Date,
      default: null,
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { UserSchema };