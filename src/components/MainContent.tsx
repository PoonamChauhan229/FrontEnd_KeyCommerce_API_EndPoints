import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes for routing
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "./Products/Products";
import GetProductList from './Products/GetProductList'

const MainContent: React.FC = () => {
  return (
    <div className=""> {/* Main content area */}
      <Routes> {/* Routing happens here */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/getproductlist" element={<GetProductList />} />
        
      </Routes>
    </div>
  );
};

export default MainContent;
