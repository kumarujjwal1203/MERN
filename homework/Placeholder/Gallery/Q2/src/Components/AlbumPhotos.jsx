import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AlbumPhotos() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-4 text-blue-600 hover:underline text-sm"
        >
          ← Back to Albums
        </Link>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Album #{id} – Photo Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden"
            >
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full"
              />
              <div className="p-2 text-sm text-gray-700">{photo.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
