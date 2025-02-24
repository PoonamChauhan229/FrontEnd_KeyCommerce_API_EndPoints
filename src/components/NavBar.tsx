// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPiedPiperAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 flex items-center justify-between p-3 border-b border-white/10 backdrop-blur-md">


          <div className="px-3 text-4xl"><FaPiedPiperAlt /></div>      
          <div className="flex justify-between">
            <div className="px-3 py-1 text-sm"><Link to="/">Home</Link></div>
            <div className="px-3 py-1 text-sm"><Link to="/generateapikey">Generate API Key</Link></div>
            
            <div className="px-3 py-1 text-2xl">
              <a href="https://documenter.getpostman.com/view/19603827/2sAYJ99dVi#00ba979a-5c61-45c0-9b38-efb2eabbe9c9" target="_blank" rel="noopener noreferrer">
                  <SiPostman />
                </a>
            </div>
            <div className="px-3 py-1 text-2xl">
              <a href="https://github.com/PoonamChauhan229/KeyCommerce_API_EndPoints.git" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>

          </div>
    </nav>
  )
};

export default Navbar;
