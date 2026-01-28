import { Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Navigationbar from './Navigationbar'
import Product from './Product'
import About from "./About";
import Blog from "./Blog";
import SinglePost from "./SinglePost";
import Contact from "./Contact";

function App() {

  return (
    <>
      <Header />
      <Navigationbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
