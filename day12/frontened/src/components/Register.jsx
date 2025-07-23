// src/components/Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // 👈 Add Link

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/register", {
        email,
        password,
      });

      console.log("Response:", res.data);
      alert("Registered successfully!");

      // 👇 Redirect to Login Page
      navigate("/");
    } catch (err) {
      console.error("Error details:", err);
      alert(err.response?.data || "Registration failed");
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button className="sm:blue" type="submit">
          Register
        </button>
      </form>

      {/* 👇 Login Link */}
      <p style={{ marginTop: "15px" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
