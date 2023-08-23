import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

// Creating a user context that stores current user and sets current user
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user); 
            }
            setCurrentUser(user);
            
        });
        return unsubscribe;
    },[])

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}