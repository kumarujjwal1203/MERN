import { useState } from "react";
import { signInWithGoogle } from "../firebaseConfig";
import "./Google.css";

export default function Google({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithGoogle();
      console.log(result);
      onLogin(result.user);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="google-container">
      <button className="google-btn" onClick={handleLogin} disabled={loading}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt="Google Icon"
        />
        {loading ? "Logging in..." : "Login with Google"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
