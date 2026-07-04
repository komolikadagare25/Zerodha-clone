import React from "react";

const EmailLogin = ({
  email,
  setEmail,
  onContinue,
}) => {
  return (
    <>
      <div className="divider">
        <span></span>
        <p>OR</p>
        <span></span>
      </div>

      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="continue-btn"
        onClick={onContinue}
      >
        Continue
      </button>
    </>
  );
};

export default EmailLogin;