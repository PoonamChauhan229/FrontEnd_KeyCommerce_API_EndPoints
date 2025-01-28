import React from "react";

const Home: React.FC = () => {
  return (
   <>
     <div className="max-w-4xl mx-auto p-2 bg-gray-900 text-white rounded-lg shadow-lg  mt-7">
        
        <p className="text-base mb-6">
          KeyCommerce provides a comprehensive set of RESTful services for managing an e-commerce platform. It includes endpoints for handling products, carts, user management, categories, and secure API key operations. The API supports pagination for better data handling and performance. Designed for flexibility, it allows seamless integration for developers building e-commerce solutions.
        </p>
  
        <p className="text-base font-semibold mb-2">📦 Key Features:</p>
  
        <ul className="list-inside list-disc space-y-4 text-lg">
          <li>
            <span className="font-semibold text-base text-blue-400">Product Management:</span> Add, update, delete, and retrieve product details.
          </li>
          <li>
            <span className="font-semibold text-base text-blue-400">Carts Management:</span> Manage user carts and checkout process.
          </li>
          <li>
            <span className="font-semibold text-base text-blue-400">User Management:</span> Create and manage users with secure authentication.
          </li>
          <li>
            <span className="font-semibold text-base text-blue-400">Categories Management:</span> Fetch and manage product categories.
          </li>
          <li>
            <span className="font-semibold text-base text-blue-400">Pagination:</span> Efficient data handling with pagination and sorting.
          </li>
          <li>
            <span className="font-semibold text-base text-blue-400">API Key Security:</span> Secure your API with key-based authentication.
          </li>
        </ul>
      </div>
   </>
  );
};

export default Home;
