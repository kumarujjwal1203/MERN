import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./Google";
import "./Home.css";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const onLogin = (user) => {
    setUser(user);
    console.log(user);
    navigate("/weather");
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">🌤️ Welcome to Weather App</h1>
        {!user && <Google onLogin={onLogin} />}
      </div>
    </div>
  );
}
