import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function GetData() {
  const [message, setMessage] = useState("");

  async function getData() {
    const response = await axios("http://localhost:3001/getMessage");
    setMessage(response.data.message);
    console.log(response.data.message);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>{message}</div>;
}
