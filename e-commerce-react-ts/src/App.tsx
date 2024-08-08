import Home from "./components/home/Home";
import Products2 from "./components/products/Products2";
import About from "./components/home/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Contact from "./components/home/Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products2 />} />
          <Route path="/contact" element= {<Contact/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
