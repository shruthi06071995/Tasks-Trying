import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [style, setStyle] = useState({
        color: "",
        bgColor: "",
        fontSize: ""
    });

    const [error, setError] = useState({});

    return (
        <UserContext.Provider
            value={{user, setUser, style, setStyle, error, setError}}
        >
            {children}
        </UserContext.Provider>
    );
};

