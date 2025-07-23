import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/custom.scss";
import Todo from "./Components/Todo";

export default function App() {
  return (
    <div className="indigo-bg p-5 text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/Todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
