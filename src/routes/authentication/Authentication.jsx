
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Authentication.scss";


function Authentication() {

    return(<div className="authentication-container">
        <SignIn/>
        <SignUp/>
    </div>);
}

export default Authentication;