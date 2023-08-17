import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as FlyFashion} from "../../assets/fly-fashion.svg"

import "./NavBar.scss";

function NavBar() {
    return(
        <Fragment>

            <div className="navigation">

                <Link className="logo-container" to="/">
                    <FlyFashion className="logo"/>
                </Link>


                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                </div>

            </div>

            <Outlet/>

        </Fragment>
    )
  }

  export default NavBar;