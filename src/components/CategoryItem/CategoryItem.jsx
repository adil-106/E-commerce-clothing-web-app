import "./CategoryItem.scss";
import {useNavigate} from "react-router-dom"

function CategoryItem(props){
    const {category} = props;
    const navigate = useNavigate();

    function handleNavigateTo() {
      return navigate(category.route);
    }
    return(
        <div className='category-item' onClick={handleNavigateTo}>
              <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
              }}/>
              <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
              
        </div>
    );
}

export default CategoryItem;