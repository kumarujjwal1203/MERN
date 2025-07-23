import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Product from "./Component/Product";
import ProductList from "./Component/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component/custom.scss";
import ProtectedRoute from "./Component/ProtectedRoute";
import Fetch from "./Component/fetch";

export default function App() {
  return (
    <div className="gradient-bg p-5 text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
