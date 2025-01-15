// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPiedPiperAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { SiWoocommerce } from "react-icons/si";




const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 flex items-center justify-between p-3 border-b border-white/10 backdrop-blur-md">


          <div className="px-3 text-4xl"><FaPiedPiperAlt /></div>      
          <div className="flex justify-between">
            <div className="px-3 py-1 text-sm"><Link to="/home">Home</Link></div>
            <div className="px-3 py-1 text-sm"><Link to="/about">About</Link></div>
            <div className="px-3 py-1 text-sm"><Link to="/contact">Contact</Link></div>
            <div className="px-3 py-1 text-2xl"><Link to="/contact"><FaGithub /></Link></div>            

          </div>
    </nav>
  )
};

export default Navbar;
