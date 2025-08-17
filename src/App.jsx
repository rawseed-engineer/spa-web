import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} /> */}
            <Route path="/spa-web/" element={<Home />} />
            <Route path="/spa-web/products" element={<Products />} />
            <Route path="/spa-web/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
