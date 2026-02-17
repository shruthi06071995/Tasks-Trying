import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";
// import Home from './Home'

function App() {

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
