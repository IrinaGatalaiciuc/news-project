import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Page404 from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Singlenews from "./pages/Singlenews";
import Footer from "./footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/details/:title" element={<Singlenews />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
