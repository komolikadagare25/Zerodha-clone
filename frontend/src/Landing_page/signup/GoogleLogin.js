import React from "react";
import { auth } from "../../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    // const navigate = useNavigate();
   const handleGoogleLogin = async () => {
    try {
        console.log("1. Button Clicked");

        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);
        console.log("2. Google Popup Success");

        const idToken = await result.user.getIdToken();
        console.log("3. Firebase Token:", idToken);

        const res = await axios.post(
            "http://localhost:3002/api/auth/google",
            {
                token: idToken,
            }
        );

        console.log("4. Backend Response:", res.data);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        console.log("5. Token Saved");

        // 🚫 TEMPORARILY REMOVE THIS
        window.location.href = `http://localhost:3001?token=${res.data.token}`;

        // alert("Stop! Check the browser console now.");

    } catch (err) {
        console.log("ERROR:", err);
        console.log("Response:", err.response?.data);
        alert("Google Login Failed");
    }
};

    return (
        <button className="google-btn" onClick={handleGoogleLogin}>
            <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="google-icon"
            />
            Continue with Google
        </button>
    );
};

export default GoogleLogin;