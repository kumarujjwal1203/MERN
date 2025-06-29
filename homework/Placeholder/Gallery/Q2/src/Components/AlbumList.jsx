import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-pink-300 p-8">
      <h1 className="text-3xl text-center font-bold text-white mb-8">
        📸 Gallery Albums
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {albums.map((album) => (
          <Link to={`/album/${album.id}`} key={album.id}>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl h-[120px] flex items-center justify-center text-center text-blue-700 font-semibold">
              {album.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
