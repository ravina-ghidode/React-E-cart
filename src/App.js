import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ProductDetails from "./components/ProductDetails.tsx";
import Cart from "./components/Cart.tsx";
import SearchItem from "./components/SearchItem.tsx";
import Product from "./components/Product.tsx";
import { useState } from "react";
import { items } from "./components/Data.tsx";
function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar setData={setData} cart={cart} setCart={setCart} />
        <Routes>
          <Route
            path="/"
            element={<Product items={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
