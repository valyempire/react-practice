import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Shop</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </Router>
    </div>
  );
};
