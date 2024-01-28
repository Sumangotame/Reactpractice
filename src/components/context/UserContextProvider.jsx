import React from "react";
import UserContext from "./UserContext"
const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = React.useState('suman')
    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;  