import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent"; // This component handles the routing
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex font-inter">
        {/* Sidebar stays fixed */}
        <div className="fixed top-0 left-0 w-56 min-h-screen bg-gray-800 text-white p-4 mt-12 overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content starts after sidebar */}
        <div className="flex flex-col ml-36 w-full">
          <div className="sticky top-0 z-10">
            <Navbar /> {/* Navbar stays fixed */}
          </div>
          <div className="overflow-y-auto flex-1 mt-16">
            <MainContent /> {/* Main content is where routing happens */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
