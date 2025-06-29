import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const resComments = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const postData = await resPost.json();
    const allComments = await resComments.json();
    const filteredComments = allComments.filter((c) => c.postId === Number(id));

    setPost(postData);
    setComments(filteredComments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl w-full mb-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-3">{post.title}</h1>
        <p className="text-gray-700 text-base mb-4">{post.body}</p>
        <p className="text-sm text-gray-500 italic">Post ID: {post.id}</p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl w-full">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Comments</h2>
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border-b pb-2">
              <p className="font-semibold text-purple-800">{comment.name}</p>
              <p className="text-sm text-gray-600">{comment.body}</p>
              <p className="text-xs text-gray-400">✉️ {comment.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
