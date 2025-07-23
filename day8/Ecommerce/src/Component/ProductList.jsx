import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [input, setInput] = useState("");

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setAllProducts(data);
    } catch (error) {
      console.error("API fetch failed:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  function onInputChange(event) {
    const value = event.target.value;
    setInput(value);
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  }

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-cyan-400 to-green-300">
      <input
        className="border-black border-2 bg-lime-600 px-3 py-2 rounded mb-4 w-full sm:w-1/2"
        placeholder="Search items"
        value={input}
        onChange={onInputChange}
      />
      <h1 className="text-3xl text-center text-white font-bold mb-6">
        Product List
      </h1>

      {products.length === 0 ? (
        <p className="text-white text-center">
          Loading or no products found...
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <li className="bg-white border border-blue-200 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-between h-[360px]">
                <div className="h-[160px] w-full flex justify-center items-center overflow-hidden mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>
                <h2 className="text-md font-semibold text-center text-blue-700 mb-1 line-clamp-2 h-[3em] overflow-hidden">
                  {product.title}
                </h2>
                <p className="text-red-600 font-bold">${product.price}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
