import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogging() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [input, setInput] = useState("");

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setAllPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const onInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-green-300 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <input
          className="border border-black bg-white px-4 py-2 rounded w-full mb-6"
          placeholder="Search blog titles"
          value={input}
          onChange={onInputChange}
        />
        <h1 className="text-3xl text-center text-white font-bold mb-8">
          Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[240px] flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-blue-700 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                  {post.body}
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  📝 Post ID: {post.id}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
