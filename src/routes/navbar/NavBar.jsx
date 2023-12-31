import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as FlyFashion} from "../../assets/fly-fashion.svg";

import { UserContext } from "../../contexts/User";

import "./NavBar.scss";
import { signUserOut } from "../../utils/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/Cart";

function NavBar() {
    const {currentUser} = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);

    // async function handleSignOut(event){
    //     await signUserOut();
    //     setCurrentUser(null);
    // }
    
    return(
        <Fragment>

            <div className="navigation">

                <Link className="logo-container" to="/">
                    <FlyFashion className="logo"/>
                </Link>


                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ? (<span className="nav-link" onClick={signUserOut}>SIGN OUT</span>) : (<Link className="nav-link" to="/auth">SIGN IN</Link>) }
                    <CartIcon/>
                </div>

                {isCartOpen && <CartDropdown/>}

            </div>

            <Outlet/>

        </Fragment>
    )
  }

  export default NavBar;