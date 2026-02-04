import { useContext, useState } from "react"
import { UserContext } from "./Context"

const CompA = () => {
    const { user, setUser} = useContext(UserContext);

    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        setUser ({ ...user, [e.target.name]: e.target.value});
    }

    function validate() {
        if (!user.name) return "Name is required";
        if (!user.email.includes("@")) return "Invalid Email";
        if (user.phone !== 0) return "Invalid Number";
        return "";
    }

    function handleSubmit() {
        const err = validate();
        setError(err);
        if (!err) alert("Form Submitted Successfully");
    }

    return (
        <div>
            <h3><b><u>Component - A - User Form</u></b></h3>
            <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
            <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
            <input name="phone" placeholder="Phone" type="number" onChange={handleChange} /><br /><br />
            <button onClick={handleSubmit}>Submit</button>
            <p style={{ color: "red"}}>{error}</p>
        </div>
    );
}

export default CompA;