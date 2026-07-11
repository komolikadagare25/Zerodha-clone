import React, { useState } from "react";

const OTPVerification = ({ email, onVerify, verifying }) => {
  const [otp, setOtp] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid OTP");
      return;
    }

    onVerify(otp);
  };

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
        onChange={(e) =>
          setOtp(e.target.value.replace(/\D/g, ""))
        }
      />

      <button
        className="continue-btn"
        disabled={verifying}
        onClick={() => onVerify(otp)}
      >
        {verifying ? "Verifying..." : "Verify OTP"}
      </button>

      <small>
        Didn't receive OTP?
      </small>
    </>
  );
};

export default OTPVerification;