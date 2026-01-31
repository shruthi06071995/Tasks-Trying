import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function Component3() {
    const {contact1, contact2} = useContext(ContactContext);

    return (
        <div style={{
            marginTop: "15px",
            border: "1px dashed gray",
            padding: "10px",
            width: "700px"
        }}>
            <h3>Component Three (Context Data)</h3>
            <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "rgb(240, 240, 240)"}}><b>From Component One:</b>{contact1.name}</p>
            <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "rgb(240, 240, 240)"}}><b>From Component Two: {contact2.email}</b></p>
        </div>
    );
}

export default Component3;