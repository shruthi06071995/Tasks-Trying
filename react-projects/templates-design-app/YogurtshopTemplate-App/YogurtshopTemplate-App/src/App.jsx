import { Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Navigationbar from './Navigationbar'
import Product from './Product'

function App() {

  return (
    <>
      <Header />
      <Navigationbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
