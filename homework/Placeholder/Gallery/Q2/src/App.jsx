import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumList from "./Components/AlbumList";
import AlbumPhotos from "./Components/AlbumPhotos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/album/:id" element={<AlbumPhotos />} />
      </Routes>
    </BrowserRouter>
  );
}
