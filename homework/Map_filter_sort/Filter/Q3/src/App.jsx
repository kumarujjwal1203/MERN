import React from "react";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];

  const evens = numbers.filter((n) => n % 2 === 0);

  return (
    <div>
      {evens.join(", ")}
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
  const users = [
    { name: "Sam", active: true },
    { name: "Pam", active: false },
  ];

  const activeUsers = users.filter((u) => u.active);

  return (
    <ul>
      {activeUsers.map((u, i) => (
        <li key={i}>{u.name}</li>
      ))}
    </ul>
  );
}

export function App3() {
  const items = [
    { name: "Watch", price: 150 },
    { name: "Pen", price: 20 },
  ];

  const expensive = items.filter((i) => i.price > 100);

  return (
    <div>
      {expensive.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}
    </div>
  );
}

export function App4() {
  const names = ["Alice", "Bob", "Ankit", "Charlie"];

  const filtered = names.filter((name) => name.startsWith("A"));

  return (
    <ul>
      {filtered.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
}

export function App5() {
  const products = [
    { name: "TV", inStock: true },
    { name: "Phone", inStock: false },
  ];

  const inStockItems = products.filter((p) => p.inStock);

  return (
    <div>
      {inStockItems.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
}
