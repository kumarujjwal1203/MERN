import React from "react";

export default function App() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <hr />

      <Q2 />
      <hr />
      <Q3 />
      <hr />
      <Q4 />
      <hr />
      <Q5 />
    </div>
  );
}
export function Q2() {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <p key={index}>
          {user.name} is {user.age} years old.
        </p>
      ))}
    </div>
  );
}

export function Q3() {
  const products = [
    { id: 1, title: "Book", price: 120 },
    { id: 2, title: "Pen", price: 10 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid black", margin: 5 }}>
          <h3>{product.title}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export function Q4() {
  const actions = ["Save", "Delete", "Edit"];

  return (
    <div>
      {actions.map((action, i) => (
        <button key={i}>{action}</button>
      ))}
    </div>
  );
}

export function Q5() {
  const users = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Jerry" },
  ];

  const UserCard = ({ name }) => <div>{name}</div>;

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </div>
  );
}
