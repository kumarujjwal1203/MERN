// src/components/BloggingPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BloggingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to the Blogging Page</h2>
      <p>This is a protected route. Only logged-in users can access this.</p>
    </div>
  );
}
