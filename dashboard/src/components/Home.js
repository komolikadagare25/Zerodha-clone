import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

     if (!token) {
      alert("Please login first to access the dashboard.");
      window.location.href = "http://localhost:3000";
    }

      try {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLoading(false);
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "http://localhost:3000";
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;