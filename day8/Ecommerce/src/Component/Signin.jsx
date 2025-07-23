import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onFormSubmit(event) {
    event.preventDefault();
    const userdetails = JSON.parse(localStorage.getItem("user"));

    if (
      userdetails &&
      userdetails.username === email &&
      userdetails.password === password
    ) {
      // ✅ Save session
      localStorage.setItem("user", JSON.stringify(userdetails));

      // ✅ Redirect
      navigate("/products");
    } else if (
      userdetails &&
      userdetails.username === email &&
      userdetails.password !== password
    ) {
      alert("Check your password!");
    } else {
      alert("Invalid username or password!");
    }

    event.target.reset();
  }

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          style={{ color: "orange", backgroundColor: "Black", margin: "10px" }}
        >
          Submit
        </button>
        <br />
        <p>
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
