import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";


function SignIn() {
    async function logGoogleUser(){
        
        // authenticating user with google sign-in
        const response = await signInWithGooglePopup();

        // Storing data of the authenticated user in firestore db.
        const userDocRef = await createUserDocumentFromAuth(response.user);
        
    }
    return(<div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>);
}

export default SignIn;