import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from "./components/GetData";
import Weather from "./components/Weather";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/getdata" element={<GetData />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
