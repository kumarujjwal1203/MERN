import { useState } from "react";
import axios from "axios";

export default function App() {
  const [nums, setNums] = useState([]);

  async function onGetNumbers() {
    let response = await axios("http://localhost:3001");
    setNums(response.data);
  }

  return (
    <div>
      <button onClick={onGetNumbers}>Get Numbers</button>
      <ul>
        {nums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
