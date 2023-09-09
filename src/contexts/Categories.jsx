import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils";

import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoryMap: {}
});

export function CategoriesProvider({children}){

    // add categories collection in db
    // useEffect(()=>{
    //     addCollectionAndDocuments("categories",SHOP_DATA);
    // },[])

    useEffect(()=>{
        async function getCategoriesMap(){
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoryMap(categoryMap);
        }
        getCategoriesMap()
    },[])

    const [categoryMap,setCategoryMap] = useState({});
    const value = {categoryMap}

    return(<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);
}