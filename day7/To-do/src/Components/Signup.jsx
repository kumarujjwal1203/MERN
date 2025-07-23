// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function onPasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function onFormSubmit(event) {
//     event.preventDefault();
//     if (username.length < 5) {
//       alert("Username should be at least 5 characters long");
//       return;
//     }
//     if (password.length < 8) {
//       alert("Password should be at least 8 characters long");
//       return;
//     }
//     // Implement signup logic here
//     console.log({ username, email, password });
//     let usr = { username, email, password };
//     localStorage.setItem("user", JSON.stringify(usr));
//     event.target.reset();
//     navigate("/SignIn");
//   }

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           placeholder="username"
//           onChange={function (event) {
//             setUsername(event.target.value);
//           }}
//         />

//         <br />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={function (event) {
//             setEmail(event.target.value);
//           }}
//         />

//         <br />

//         <input
//           type="password"
//           placeholder="password"
//           onChange={onPasswordChange}
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
//           Already have an account?<Link to="/SignIn">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormSubmit(event) {
    event.preventDefault();
    if (username.length < 5)
      return alert("Username must be at least 5 characters");
    if (password.length < 8)
      return alert("Password must be at least 8 characters");

    try {
      const response = await axios.post("/register", {
        username,
        email,
        password,
      });
      alert("Registration Successful");
      navigate("/SignIn");
    } catch (err) {
      alert("Registration Failed");
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
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
          Already have an account? <Link to="/SignIn">Login</Link>
        </p>
      </form>
    </div>
  );
}
