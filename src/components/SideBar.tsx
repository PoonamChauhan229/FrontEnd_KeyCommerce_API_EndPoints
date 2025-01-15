import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-56 min-h-screen p-4 overflow-y-auto">
      <ul className="space-y-4">
        <li>
          <Link to="/home" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/product" className="text-gray-300 hover:text-white">
            Product
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-sm pl-3"><Link to='/getproductlist'>Get All Products</Link></li>
            <li className="text-sm pl-3">Product 2</li>
            <li className="text-sm pl-3">Product 3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
