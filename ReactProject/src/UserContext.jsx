import React from 'react';
import { createContext,useContext} from 'react';
const UserContext = createContext(); 
export const UserProvider = ({children}) => {
    const UserName = "Jayanthi";
    return(
        <UserContext.Provider 
        value={UserName}>
            {children}
            </UserContext.Provider>
    );
};
export const useUser=() =>useContext(UserContext);