import { createContext } from "react";


export const ContactContext = createContext();

export const ContactProvider = ({children}) => {
    const contact1 = {
        name: "Raji",
        email: "raji@gmail.com",
        phone: "9876543210"
    };

    const contact2 = {
        name: "Priya",
        email: "Priya@gmail.com",
        phone: "9638527410",
        bgColor: "#dbeafe",
    };

    return (
        <ContactContext.Provider value={{contact1, contact2}}>
            {children}
        </ContactContext.Provider>
    );
};
