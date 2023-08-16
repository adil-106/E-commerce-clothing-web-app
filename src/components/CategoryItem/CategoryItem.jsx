import "./CategoryItem.scss";

function CategoryItem(props){
    const {category} = props
    return(
        <div className='category-item'>
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