import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Link to="/">首頁</Link>
        <Link to="/checkout">購物車</Link>
        <Routes>
          {/* "/"代表首頁   */}
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          {/* path="*"代表上述網頁都找不到會去的頁面   */}

          <Route path="*" element={<h2>找不到網頁</h2>}></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
