import "./App.css";
import { lazy, Suspense } from "react";
// import HomePage from "./components/home/HomePage";
import Loader from "./components/loader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
// import Navbar from "./components/navbar/Navbar";
// import Cart from "./components/cart/Cart";
// import Orders from "./components/orders/Orders";
// import Checkout from "./components/checkout/Checkout";

const HomePage = lazy(() => import("./components/home/HomePage"));
const Orders = lazy(() => import("./components/orders/Orders"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
    <div className="App">

      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Suspense>
  );
}

export default App;
