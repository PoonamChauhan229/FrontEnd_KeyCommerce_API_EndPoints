import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-56 max-h-screen p-4 overflow-y-auto fixed left-0 top-4 bottom-0 z-50">
      <ul className="space-y-4">
        <li>
          <Link to="/home" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/user" className="text-gray-300 hover:text-white">
            User
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/register'>Register User</Link></li>
            <li className="text-xs pl-3"><Link to='/login'>User Login</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/apikey" className="text-gray-300 hover:text-white">
            API Key
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/generateapikey'>Generate API Key</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/category" className="text-gray-300 hover:text-white">
            Category
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/getallcategory'>Get All Category</Link></li>
            <li className="text-xs pl-3 "><Link to='/getproductscategory'>Get Products By Category</Link></li>
            </ul>
        </li>


        <li>
          <Link to="/product" className="text-gray-300 hover:text-white">
            Product
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/getproductlist'>Get All Products</Link></li>
            <li className="text-xs pl-3 "><Link to='/addproduct'>Add Product</Link></li>
            <li className="text-xs pl-3 "><Link to='/updateproduct'>Update Product</Link></li>
            <li className="text-xs pl-3 "><Link to='/deleteproduct'>Delete Product</Link></li>
            <li className="text-xs pl-3 "><Link to='/singleproduct'>Get Single Product</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/cart" className="text-gray-300 hover:text-white">
            Cart
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/getcart'>Get Cart Details</Link></li>
            <li className="text-xs pl-3 "><Link to='/addcart'>Add Item to Cart</Link></li>
            <li className="text-xs pl-3 "><Link to='/deletecart'>Delete Item from Cart</Link></li>
            <li className="text-xs pl-3 "><Link to='/emptycart'>Empty Cart</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/paginate" className="text-gray-300 hover:text-white">
            Paginate
          </Link>
          <ul className="space-y-2 border-l-2 border-gray-500 mt-2">
            <li className="text-xs pl-3"><Link to='/FilterByCategory'>Filter By Category</Link></li>
            <li className="text-xs pl-3"><Link to='/limitProductsResults'>Limit Results</Link></li>
            <li className="text-xs pl-3"><Link to='/skipProductsResults'>Skip Results</Link></li>
            <li className="text-xs pl-3"><Link to='/sortByPriceDesc'>Sort Desc (Price)</Link></li>
            <li className="text-xs pl-3"><Link to='/sortByPriceAsc'>Sort Asc (Price)</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryAndLimit'>Filter: Category + Limit</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryAndSkip'>Filter: Category + Skip</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryAndSortDesc'>Filter: Category + Desc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryLimitAndSkip'>Filter: Cat + Limit + Skip</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryLimitAndSortDesc'>Filter: Cat + Limit + Desc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryLimitAndSortAsc'>Filter: Cat + Limit + Asc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategorySkipAndSortDesc'>Filter: Cat + Skip + Desc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategorySkipAndSortAsc'>Filter: Cat + Skip + Asc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterBylimitSkipAndSortDesc'>Filter: Limit + Skip + Desc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterBylimitSkipAndSortAsc'>Filter: Limit + Skip + Asc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryLimitSkipAndSortDesc'>Filter: Cat + Limit + Skip + Desc</Link></li>
            <li className="text-xs pl-3"><Link to='/filterByCategoryLimitSkipAndSortAsc'>Filter: Cat + Limit + Skip + Asc</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
