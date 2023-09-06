
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/Categories";


import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

function CategoriesPreview(){
    const {categoryMap} = useContext(CategoriesContext);
    return(
        <Fragment>
            {Object.keys(categoryMap).map(title => {
                const products = categoryMap[title];
                return (<CategoryPreview title={title} products={products}/>)
            }
            )}
        </Fragment>
    );
}

export default CategoriesPreview;