import React, { useState, useEffect } from "react";
import "./signup.css";

import GoogleLogin from "./GoogleLogin";
import EmailLogin from "./EmailLogin";
import OTPVerification from "./OTPVerification";

const Signup = ({ onClose }) => {

    const [email, setEmail] = useState("");
    const [step, setStep] = useState("email");

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleContinue = () => {
        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }

        setStep("otp");
    };

    const handleOTPVerify = (otp) => {
        console.log("Email:", email);
        console.log("OTP:", otp);

        alert("OTP Verified!");
    };

    return (
        <div className="auth-overlay">
            <div className="auth-container">

                {/* LEFT SIDE */}
                <div className="auth-left">
                    <div className="brand">
                        <h1>UrbanTrade</h1>
                        <p>Trade Smarter. Invest Better.</p>
                    </div>

                    <div className="features">
                        <div className="feature">📈 Invest with Confidence</div>
                        <div className="feature">📊 Track Holdings</div>
                        <div className="feature">💼 Manage Portfolio</div>
                        <div className="feature">🔒 Secure Authentication</div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="auth-right">

                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    {step === "email" ? (
                        <>
                            <h2>Welcome Back</h2>

                            <GoogleLogin />

                            <EmailLogin
                                email={email}
                                setEmail={setEmail}
                                onContinue={handleContinue}
                            />
                        </>
                    ) : (
                        <OTPVerification
                            email={email}
                            onVerify={handleOTPVerify}
                        />
                    )}

                </div>

            </div>
        </div>
    );
};

export default Signup;