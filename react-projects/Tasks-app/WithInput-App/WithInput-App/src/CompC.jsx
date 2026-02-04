import { useContext } from "react";
import {UserContext} from "./UserContext";

const CompC = () => {
    const { user, style } = useContext(UserContext);

    return (
        <div>
            <h3>USER DETAILS</h3>
            <p>Name: {user.nameW}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone}</p>
        </div>
    );;
}

export default CompC;