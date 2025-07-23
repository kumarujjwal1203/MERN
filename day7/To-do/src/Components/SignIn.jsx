// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// export default function SignIn() {
//   //Link tag is used in react-router-dom to navigate between different routes.
//   // Anchor tag is used to link to a different part of the same page it is an element of html.

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function onFormSubmit(event) {
//     event.preventDefault();
//     let userdetails = JSON.parse(localStorage.getItem("user"));
//     if (
//       userdetails &&
//       userdetails.username === email &&
//       userdetails.password === password
//     ) {
//       navigate("/to-do");
//     } else if (
//       userdetails.username === email &&
//       userdetails.password !== password
//     ) {
//       alert("Check your password!");
//     } else {
//       alert("Invalid username or password!");
//     }
//     event.target.reset();
//     navigate("/Todo");
//   }

//   return (
//     <div>
//       <h1>LogIn</h1>
//       <form onSubmit={onFormSubmit}>
//         <input
//           type="username"
//           placeholder="username"
//           onChange={function (event) {
//             setEmail(event.target.value);
//           }}
//         />

//         <br />

//         <input
//           type="password"
//           placeholder="password"
//           onChange={function (event) {
//             setPassword(event.target.value);
//           }}
//         />

//         <br />
//         <button
//           type="submit"
//           style={{ color: "orange", backgroundColor: "Black" }}
//         >
//           Submit
//         </button>
//         <br />
//         <p>
//           Don't have an account? <Link to="/">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post("/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("username", res.data.username);
        navigate("/Todo");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      alert("Login error");
    }
  }

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="email"
          placeholder="Email"
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
          style={{ color: "orange", backgroundColor: "Black" }}
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
