import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

function CartDropdown(){
    const {cartItems, setCartOpen, isCartOpen} = useContext(CartContext);

    const navigate = useNavigate();

    function handleOnCheckoutClick(){
        setCartOpen(!isCartOpen); //will toggle off the cart when go to checkout is clicked
        navigate("/checkout");
    }

    return(<div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map(cartItem => {
                return(<CartItem key={cartItem.id} cartItem={cartItem}/>)
            })}
        </div>
        <Button onClick={handleOnCheckoutClick}>GO TO CHECKOUT</Button>
    </div>)
}

export default CartDropdown;