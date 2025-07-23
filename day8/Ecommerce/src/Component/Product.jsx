import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="shadow-lg w-full max-w-sm bg-white p-6 rounded-2xl text-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-auto mx-auto mb-4"
        />
        <h1 className="text-lg font-semibold mb-2">{product.title}</h1>
        <p className="text-green-600 font-bold text-xl mb-2">
          ${product.price}
        </p>
        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
