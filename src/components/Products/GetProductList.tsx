// src/pages/Products.tsx
import React from "react";

const GetProductList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Products</h2>
        <p className="text-sm leading-relaxed">
          The <span className="font-medium text-blue-400">Products</span> section provides a comprehensive API for managing product-related operations in the KeyCommerce platform. Users can create, retrieve, update, and delete products with secure API key authentication.
        </p>
      </section>

      <section className="border-l-4 border-blue-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Get Products List</h3>
        <p className="text-sm leading-relaxed">
          This endpoint allows users to retrieve all available products from the KeyCommerce platform. A valid API key is required for secure access.
        </p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs font-mono text-green-400">GET</p>
          <p className="text-xs font-mono text-blue-300 break-all">
            https://keycommerce-api.onrender.com/user/products
          </p>
        </div>

        <section>
          <h4 className="text-sm font-medium text-white mt-4">Request Headers</h4>
          <p className="text-xs bg-gray-800 p-3 rounded-lg text-gray-300">
            <span className="text-yellow-300 font-medium">x-api-key: </span>
            <span className="text-white">Your API key</span>
          </p>
        </section>

        <section>
          <h4 className="text-sm font-medium text-white mt-4">Response</h4>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><span className="text-green-400 font-medium">200 OK:</span> Returns a list of products.</li>
            <li><span className="text-red-400 font-medium">401 Unauthorized:</span> Missing or invalid API key.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h4 className="text-sm font-medium text-white mb-2">Response Fields</h4>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><span className="text-blue-400 font-medium">name:</span> Name of the product.</li>
            <li><span className="text-blue-400 font-medium">price:</span> Price of the product.</li>
            <li><span className="text-blue-400 font-medium">description:</span> A short product description.</li>
            <li><span className="text-blue-400 font-medium">category:</span> Category of the product.</li>
            <li><span className="text-blue-400 font-medium">productImage:</span> URL for the product image.</li>
            <li><span className="text-blue-400 font-medium">_id:</span> Unique identifier for the product.</li>
          </ul>
        </section>
      </section>

      <section className="border-l-4 border-blue-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Example Request</h3>
        <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-200">
          <p className="text-green-400 mb-2">curl</p>
          <code>
            curl --location 'https://keycommerce-api.onrender.com/user/products' \<br />
            --header 'x-api-key: <span className="text-yellow-300">Your API Key</span>' \<br />
            --data ''
          </code>
        </div>
      </section>

      <section className="border-l-4 border-green-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Example Response</h3>
        <p className="text-sm leading-relaxed">
          <span className="text-green-400 font-medium">200 OK</span>: Request was successful.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-200">
          <p className="text-blue-300">// Response Body</p>
          <code>
            {"{"} <br />
            &nbsp;&nbsp;"name": "Product 1", <br />
            &nbsp;&nbsp;"price": 100, <br />
            &nbsp;&nbsp;"description": "A sample product", <br />
            &nbsp;&nbsp;"category": "Electronics", <br />
            &nbsp;&nbsp;"productImage": "https://image.url", <br />
            &nbsp;&nbsp;"_id": "123456" <br />
            {"}"}
          </code>
        </div>
      </section>

      <section className="border-l-4 border-yellow-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Response Headers (15)</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><span className="font-medium text-blue-400">Content-Type:</span> application/json</li>
          <li><span className="font-medium text-blue-400">x-api-key:</span> Your API Key</li>
          <li><span className="font-medium text-blue-400">Cache-Control:</span> no-cache</li>
        </ul>
      </section>
    </div>
  );
};

export default GetProductList;
