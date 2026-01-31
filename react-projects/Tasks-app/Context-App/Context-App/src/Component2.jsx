import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function Component2() {
    const { contact2 } = useContext(ContactContext);

    return (
        <div style={{
            backgroundColor: contact2.bgColor,
            padding: "20px",
            marginTop: "10px",
            width: "660px"
        }}>
            <h3>Component Two</h3>
            <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "rgb(240, 240, 240)"}}>Name: {contact2.name}</p>
            <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "rgb(240, 240, 240)"}}>Email: {contact2.email}</p>
            <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "rgb(240, 240, 240)"}}>Phone: {contact2.phone}</p>
            <button style={{padding: "5px", width: "165px", height: "45px", border: "2px solid black", borderRadius: "35px", backgroundColor: "#fefefe"}}>Submit</button>
        </div>
    );
}

export default Component2;