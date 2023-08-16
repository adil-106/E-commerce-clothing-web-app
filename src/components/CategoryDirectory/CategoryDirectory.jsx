import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryDirectory.scss"


function CategoryDirectory(props){
    const {categories} = props;
    return(
        <div className="categories-directory">
        {categories.map((category)=>{
          return (
            <CategoryItem key={category.id} category={category}/> 
          );
        })}
      </div>
    );
}

export default CategoryDirectory;