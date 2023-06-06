import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import './App.css'

export default function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="hero">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

