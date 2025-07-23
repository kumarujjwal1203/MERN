import { useState } from "react";
import "./Style.css";

export default function State() {
  const [count, setCount] = useState(0);

  let nameClass = "black";

  if (count > 0) {
    nameClass = "green";
  } else if (count < 0) {
    nameClass = "red";
  } else {
    nameClass = "black";
  }
  function onIncrease() {
    setCount(count + 1);
  }
  function onDecrease() {
    setCount(count - 1);
  }

  function onReset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>
        Count: <span className={nameClass}>{count}</span>
      </h1>
      <button
        onClick={onIncrease}
        style={{
          color: "green",
          background: "aqua",
          height: "30px",
          width: "100px",
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={onDecrease}
        style={{
          color: "red",
          background: "pink",
          height: "30px",
          width: "100px",
        }}
      >
        Decrease
      </button>
      <br />
      <button
        onClick={onReset}
        style={{
          color: "orange",
          background: "black",
          height: "30px",
          width: "100px",
        }}
      >
        Reset
      </button>
    </div>
  );
}
