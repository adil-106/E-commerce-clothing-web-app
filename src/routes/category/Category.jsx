import "./Category.scss";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {CategoriesContext} from "../../contexts/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";

function Category(){
    const {category} = useParams();
    const {categoryMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoryMap[category]);

    useEffect(()=>{
        setProducts(categoryMap[category])
    },[category,categoryMap]);

    return(
        <>
        <h2>{category.toLocaleUpperCase()}</h2>
        <div className="category-container">
            {
               products && products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </>
        
    )
}

export default Category;