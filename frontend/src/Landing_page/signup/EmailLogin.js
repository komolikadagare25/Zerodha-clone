import React from "react";

const EmailLogin = ({
  fullName,
  setFullName,
  email,
  setEmail,
  onContinue,
  loading,
}) => {
  return (
    <>
      <div className="divider">
        <span></span>
        <p>OR</p>
        <span></span>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="continue-btn"
        onClick={onContinue}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Sending OTP...
          </>
        ) : (
          "Continue"
        )}
      </button>
    </>
  );
};

export default EmailLogin;