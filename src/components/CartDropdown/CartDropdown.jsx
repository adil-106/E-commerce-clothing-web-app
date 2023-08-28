import Button from "../Button/Button";
import "./CartDropdown.scss";
function CartDropdown(){
    return(<div className="cart-dropdown-container">
        <div className="cart-items"/>
        <Button>GO TO CHECKOUT</Button>
    </div>)
}

export default CartDropdown;