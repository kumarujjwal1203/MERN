import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogging from "./Components/Blogging";
import Post from "./Components/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogging />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
