import SignUp from "../../components/SignUp/SignUp";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";


function SignIn() {

    async function logGoogleUserWithPopup(){

        // authenticating user with google sign-in
        const response = await signInWithGooglePopup();

        // Storing data of the authenticated user in firestore db.
        const userDocRef = await createUserDocumentFromAuth(response.user);
        
    }
    return(<div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUserWithPopup}>Sign In With Google</button>
        <SignUp/>
    </div>);
}

export default SignIn;