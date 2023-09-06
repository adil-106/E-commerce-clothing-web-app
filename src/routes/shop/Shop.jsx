// import SHOP_DATA from "../../shop-data.json";
// import { Fragment, useContext } from "react";
// import { CategoriesContext } from "../../contexts/Categories";
// import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import "./Shop.scss";
// import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

import { Route, Routes } from "react-router-dom";

function Shop(){
    
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}

export default Shop;