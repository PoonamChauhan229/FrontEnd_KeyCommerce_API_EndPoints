import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes for routing
import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "./Products/Products";
import GetProductList from './Products/GetProductList'
import Cart from "./Cart/Cart";
import User from "./User/User";
import AddProducts from "./Products/AddProducts";
import UpdateProducts from "./Products/UpdateProducts";
import DeleteProducts from "./Products/DeleteProducts";
import GetSingleProducts from "./Products/GetSingleProducts";
import GetCart from "./Cart/GetCart";
import AddCart from "./Cart/AddCart";
import DeleteCart from "./Cart/DeleteCart";
import EmptyCart from "./Cart/EmptyCart";
import LoginUser from "./User/LoginUser";
import RegisterUser from "./User/RegisterUser";
import Paginate from "./Paginate/Paginate";
import FilterCategory from "./Paginate/FilterCategory";
import LimitResults from "./Paginate/LimitResults";
import SkipResults from "./Paginate/SkipResults";
import SortDescPrice from "./Paginate/SortDescPrice";
import SortAscPrice from "./Paginate/SortAscPrice";
import FilterCategoryLimit from "./Paginate/FilterCategoryLimit";
import FilterCategorySkip from "./Paginate/FilterCategorySkip";
import FilterCategoryDesc from "./Paginate/FilterCategoryDesc";
import FilterCatLimitSkip from "./Paginate/FilterCatLimitSkip";
import FilterCatLimitDesc from "./Paginate/FilterCatLimitDesc";
import FilterCatLimitAsc from "./Paginate/FilterCatLimitAsc";
import FilterCatSkipDesc from "./Paginate/FilterCatSkipDesc";
import FilterCatSkipAsc from "./Paginate/FilterCatSkipAsc";
import FilterLimitSkipDesc from "./Paginate/FilterLimitSkipDesc";
import FilterLimitSkipAsc from "./Paginate/FilterLimitSkipAsc";
import FilterCatLimitSkipDesc from "./Paginate/FilterCatLimitSkipDesc";
import FilterCatLimitSkipAsc from "./Paginate/FilterCatLimitSkipAsc";
import ApiKey from "./ApiKey/APIKey";
import GenerateApiKey from "./ApiKey/GenerateApiKey";
import Category from "./Category/Category";
import GetAllCategory from "./Category/GetAllCategory";
import GetProductsCategory from "./Category/GetProductsCategory";

const MainContent: React.FC = () => {
  return (
    <div className=""> {/* Main content area */}
      <Routes> {/* Routing happens here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/getcart" element={<GetCart />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/deletecart" element={<DeleteCart />} />
        <Route path="/emptycart" element={<EmptyCart />} />


        <Route path="/user" element={<User/>}/>
        <Route path="/login" element={<LoginUser/>}/>
        <Route path="/register" element={<RegisterUser/>}/>

        <Route path="/apikey" element={<ApiKey/>}/>
        <Route path="/generateapikey" element={<GenerateApiKey/>}/>

        <Route path="/category" element={<Category/>}/>
        <Route path="/getallcategory" element={<GetAllCategory/>}/>
        <Route path="/getproductscategory" element={<GetProductsCategory/>}/>
        

        <Route path="/getproductlist" element={<GetProductList />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/updateproduct" element={<UpdateProducts />} />
        <Route path="/deleteproduct" element={<DeleteProducts />} />
        <Route path="/singleproduct" element={<GetSingleProducts />} />

        <Route path="/paginate" element={<Paginate />} />
        <Route path="/FilterByCategory" element={<FilterCategory />} />
        <Route path="/limitProductsResults" element={<LimitResults />} />
        <Route path="/skipProductsResults" element={<SkipResults />}/>
        <Route path="/sortByPriceDesc" element={<SortDescPrice />}/>
        <Route path="/sortByPriceAsc" element={<SortAscPrice />}/>
        <Route path="/filterByCategoryAndLimit" element={<FilterCategoryLimit />}/>
        <Route path="/filterByCategoryAndSkip" element={<FilterCategorySkip />}/>
        <Route path="/filterByCategoryAndSortDesc" element={<FilterCategoryDesc />}/>
        <Route path="/filterByCategoryLimitAndSkip" element={<FilterCatLimitSkip/>}/>
        <Route path="/filterByCategoryLimitAndSortDesc" element={<FilterCatLimitDesc />}/>
        <Route path="/filterByCategoryLimitAndSortAsc" element={<FilterCatLimitAsc />}/>
        <Route path="/filterByCategorySkipAndSortDesc" element={<FilterCatSkipDesc />}/>
        <Route path="/filterByCategorySkipAndSortAsc" element={<FilterCatSkipAsc />}/>
        <Route path="/filterBylimitSkipAndSortDesc" element={<FilterLimitSkipDesc />}/>
        <Route path="/filterBylimitSkipAndSortAsc" element={<FilterLimitSkipAsc />}/>
        <Route path="/filterByCategoryLimitSkipAndSortDesc" element={<FilterCatLimitSkipDesc />}/>
        <Route path="/filterByCategoryLimitSkipAndSortAsc" element={<FilterCatLimitSkipAsc />}/>
      </Routes>
    </div>
  );
};

export default MainContent;
