import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./Login";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import Stores from "./Stores";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<Home />} />
         <Route path="/home/menu" element={<Menu />} />
         <Route path="/home/stores" element={<Stores />} />
         <Route path="/home/cart" element={<Cart />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
