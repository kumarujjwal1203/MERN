import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/");
        const data = await response.text(); // if you're sending plain text
        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <div>{data}</div>;
}
