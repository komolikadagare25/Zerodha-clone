import React, { useState, useEffect } from "react";
import "./signup.css";
import axios from "axios";
import toast from "react-hot-toast";

import GoogleLogin from "./GoogleLogin";
import EmailLogin from "./EmailLogin";
import OTPVerification from "./OTPVerification";

const Signup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  //   const handleContinue = async () => {
  //   try {
  //     if (!fullName.trim()) {
  //       return alert("Please enter your name.");
  //     }

  //     if (!email.trim()) {
  //       return alert("Please enter your email.");
  //     }

  //     await axios.post("http://localhost:3002/api/auth/send-otp", {
  //       fullName,
  //       email,
  //     });

  //     alert("OTP sent successfully!");
  //     setStep("otp");
  //   } catch (err) {
  //     console.log(err);
  //     alert(err.response?.data?.message || "Failed to send OTP");
  //   }
  // };

  const handleContinue = async () => {
    if (loading) return;

    if (!fullName.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const toastId = toast.loading("Sending OTP...");

      await axios.post("http://localhost:3002/api/auth/send-otp", {
        fullName,
        email,
      });

      toast.success("OTP sent successfully!", {
        id: toastId,
      });

      // Give user time to read the success message
      setTimeout(() => {
        setStep("otp");
      }, 1200);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerify = async (otp) => {
    if (verifying) return;

    try {
      setVerifying(true);

      const toastId = toast.loading("Verifying OTP...");

      const res = await axios.post(
        "http://localhost:3002/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Signup Successful!", {
        id: toastId,
      });

      setTimeout(() => {
        window.location.href = "http://localhost:3001";
      }, 1500);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "OTP verification failed"
      );
    } finally {
      setVerifying(false);
    }
  };
  return (
    <div className="auth-overlay">
      <div className="auth-container">
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

        <div className="auth-right">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>

          {step === "email" ? (
            <>
              <h2>Welcome</h2>

              <GoogleLogin />

              <EmailLogin
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                onContinue={handleContinue}
                loading={loading}

              />
            </>
          ) : (
            <OTPVerification
              email={email}
              onVerify={handleOTPVerify}
              verifying={verifying}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;