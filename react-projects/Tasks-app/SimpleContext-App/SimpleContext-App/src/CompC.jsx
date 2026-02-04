import { useContext } from "react";
import { UserContext } from "./Context";

function CompC() {
    const { user, style } = useContext(UserContext);

    return (
        <div
        style={{
            color: style.color,
            backgroundColor: style.bgColor,
            fontSize: style.fontSize,
            padding: "10px"
        }}
        >
            <h3><b><u>Component - C - Output</u></b></h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default CompC;