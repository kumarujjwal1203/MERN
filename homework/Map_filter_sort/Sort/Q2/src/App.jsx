import React from "react";

export default function App() {
  const numbers = [5, 1, 9, 2];

  const sorted = [...numbers].sort((a, b) => a - b);

  return (
    <div>
      {sorted.join(", ")}
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr />
      <App4 />
      <hr />
      <App5 />
    </div>
  );
}

export function App2() {
  const fruits = ["Banana", "Apple", "Mango"];

  const sorted = [...fruits].sort();

  return (
    <ul>
      {sorted.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export function App3() {
  const users = [
    { name: "A", age: 30 },
    { name: "B", age: 20 },
  ];

  const sorted = [...users].sort((a, b) => a.age - b.age);

  return (
    <div>
      {sorted.map((u, i) => (
        <p key={i}>
          {u.name} - {u.age}
        </p>
      ))}
    </div>
  );
}

export function App4() {
  const products = [
    { name: "Bag", price: 500 },
    { name: "Shoe", price: 700 },
  ];

  const sorted = [...products].sort((a, b) => b.price - a.price);

  return (
    <div>
      {sorted.map((p, i) => (
        <p key={i}>
          {p.name} - ₹{p.price}
        </p>
      ))}
    </div>
  );
}

export function App5() {
  const animals = ["Elephant", "Cat", "Giraffe"];

  const sorted = [...animals].sort((a, b) => a.length - b.length);

  return (
    <ul>
      {sorted.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
    </ul>
  );
}
