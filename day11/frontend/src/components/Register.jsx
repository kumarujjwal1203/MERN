import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormRegister(e) {
    e.preventDefault();
    // email is unique ,password is storng
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    //axios post request
    const response = await axios.post("http://localhost:3001/register", {
      email,
      password,
    });
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onFormRegister}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
