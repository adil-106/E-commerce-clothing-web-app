import { createContext, useState } from "react";

// Creating a user context that stores current user and sets current user
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}