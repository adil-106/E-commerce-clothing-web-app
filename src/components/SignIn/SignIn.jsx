import { useState, useContext } from "react";
import {signInWithGooglePopup, createAuthWithEmailAndPassword, createUserDocumentFromAuth, signUserInWithEmailAndPassword} from "../../utils/firebase.utils"
import FormInput from "../FormInput/FormInput";
import { UserContext } from "../../contexts/User";
import "./SignIn.scss";
import Button from "../Button/Button";

const defaultFormFields = {
    email: "",
    password: ""
}

function SignIn(){
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    
    function handleChange(event){
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }


    async function handleSubmit(event){
        event.preventDefault();
        
        
        try{
            const response = await signUserInWithEmailAndPassword(email,password);

            // Setting the current user to logged in user using UserContext
            setCurrentUser(response.user);
        }
        catch(error){
            if(error.code === "auth/wrong-password"){
                alert("Incorrect password for email.");
            } else if(error.code === "auth/user-not-found"){
                alert("Email not found. Please Sign Up.")
            } else if(error.code === "auth/invalid-email"){
                alert("Please enter a valid email.")
            } else{
                console.log("Error signing in",error);
            } 
        }

        setFormFields(defaultFormFields);
    }

    // Sign In With Google
    async function signInWithGoogle(){
        // authenticating user with google sign-in
        const response = await signInWithGooglePopup();

        // Setting the current user to logged in user using UserContext
        setCurrentUser(response.user);

        // Storing data of the authenticated user in firestore db.
        const userDocRef = await createUserDocumentFromAuth(response.user);  
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <h1>Sign In with Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange}/>
                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Sign In With Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;