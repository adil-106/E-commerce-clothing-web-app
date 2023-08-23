import { useState, useContext } from "react";
import {createAuthWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase.utils"
import FormInput from "../FormInput/FormInput";

import "./SignUp.scss";
import Button from "../Button/Button";

import { UserContext } from "../../contexts/User";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function SignUp(){
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    // console.log(formFields);
    function handleChange(event){
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }


    async function handleSubmit(event){
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Passwords do no match!");
            return;
        }
        try{
            const response = await createAuthWithEmailAndPassword(email,password);
            const {user} = response;

            setCurrentUser(user);

            const userDocRef = await createUserDocumentFromAuth(user,{displayName});
        }
        catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("User already registered.");
            } else {
                console.log("user creation encountered an error",error);
            }
        }
        setFormFields(defaultFormFields);
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <h1>Sign Up with Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange={handleChange}/>
                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange}/>
                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange}/>
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
                <Button type="submit">Sign Up</Button>
                {/* <button type="submit">Sign Up</button> */}

            </form>
        </div>
    )
}

export default SignUp;