import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function Component1() {
    const {contact1} = useContext(ContactContext);

    function click() {
        alert("Data Submited")
    }

    return (
        <>
            <div style={{
                padding: "10px",
                width: "160px"
                }}>
                    <h3 style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "lightgray"}}>Component One</h3>
                    <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "lightgray"}}>Name: {contact1.name}</p>
                    <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "lightgray"}}>Email: {contact1.email}</p>
                    <p style={{ border: "1px solid black", padding:"10px", width: "555px", borderRadius: "5px", backgroundColor: "lightgray"}}>Phone: {contact1.phone}</p>
                    <button style={{padding: "5px", width: "165px", height: "45px", border: "2px solid black", borderRadius: "35px", backgroundColor: "#fefefe"}}
                        onClick={() => click()}                    >Submit</button>
            </div>
        </>
    );
}

export default Component1;