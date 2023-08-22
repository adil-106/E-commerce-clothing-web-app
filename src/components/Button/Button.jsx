import "./Button.scss";


const buttonClass = {
    inverted: "inverted",
    google: "google-sign-in"
}

function Button({children, buttonType, ...otherProps}){
    return(<button className={`${buttonClass[buttonType]} button-container`} {...otherProps}>{children}</button>);
}

export default Button;