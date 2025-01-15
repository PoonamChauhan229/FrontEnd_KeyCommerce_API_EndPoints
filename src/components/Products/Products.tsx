// src/pages/Products.tsx
import React from "react";

const Products: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Products</h2>
        <p className="text-sm leading-relaxed">
          The <span className="font-medium text-blue-400">Products</span> section provides a comprehensive API for managing product-related operations in the KeyCommerce platform. Users can create, retrieve, update, and delete products with secure API key authentication.
        </p>
      </section>

      <section className="border-l-4 border-blue-500 pl-4 space-y-4">
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
      </section>

      <section className="border-l-4 border-teal-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Add a New Product</h3>
        <p className="text-sm leading-relaxed">
          This endpoint allows users to add a new product to the KeyCommerce platform. A valid API key is required for secure access.
        </p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs font-mono text-green-400">POST</p>
          <p className="text-xs font-mono text-blue-300 break-all">
            https://keycommerce-api.onrender.com/user/products
          </p>
        </div>
      </section>

      <section className="border-l-4 border-purple-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Update Product</h3>
        <p className="text-sm leading-relaxed">
          This endpoint allows users to update an existing product's details using its unique ID. A valid API key is required for secure access.
        </p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs font-mono text-green-400">PUT</p>
          <p className="text-xs font-mono text-blue-300 break-all">
            https://keycommerce-api.onrender.com/user/products/{'{product_id}'}
          </p>
        </div>
      </section>

      <section className="border-l-4 border-red-500 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Delete Product</h3>
        <p className="text-sm leading-relaxed">
          This endpoint allows users to delete a product using its unique ID. A valid API key is required for secure access.
        </p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs font-mono text-red-400">DELETE</p>
          <p className="text-xs font-mono text-blue-300 break-all">
            https://keycommerce-api.onrender.com/user/products/{'{product_id}'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
