import "./CartIcon.scss";
import {ReactComponent as ShoppingCart} from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

function CartIcon(){

    const {isCartOpen,setCartOpen,cartCount} = useContext(CartContext)

    function handleCartToggle(){
        setCartOpen(!isCartOpen)
    }

    return(<div className="cart-icon-container" onClick={handleCartToggle}>
        <ShoppingCart className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
    </div>)
}

export default CartIcon;