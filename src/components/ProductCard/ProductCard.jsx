import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/Cart";
import "./ProductCard.scss";

function ProductCard(props){
    const product = props.product;
    const {addItemsToCart} = useContext(CartContext);

    function addProductToCart() {
        addItemsToCart(product);
    }

    return(<div className="product-card-container">
        <img src={product.imageUrl} alt={product.name}/>
        <div className="footer">
            <span className="name">{product.name}</span>
            <span className="price">${product.price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>
    </div>)
}

export default ProductCard;