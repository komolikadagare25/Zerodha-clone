import React, { useState } from "react";

const OTPVerification = ({ email, onVerify }) => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <h2>Verify OTP</h2>

      <p className="subtitle">
        OTP sent to <b>{email}</b>
      </p>

      <input
        type="text"
        placeholder="Enter 6-digit OTP"
        value={otp}
        maxLength={6}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        className="continue-btn"
        onClick={() => onVerify(otp)}
      >
        Verify OTP
      </button>

      <small>
        Didn't receive OTP? <a href="/">Resend</a>
      </small>
    </>
  );
};

export default OTPVerification;