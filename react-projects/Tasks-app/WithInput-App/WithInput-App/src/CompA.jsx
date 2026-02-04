import { useContext } from "react";
import { UserContext } from "./UserContext";

const CompA = () => {
    const { user, setUser, error, setError } = useContext(UserContext);


    const handleChange = (e) => {
        setUser ({...user, 
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!user.name) newErrors.name = "Name is Required";
        if (!user.email.includes("@")) newErrors.email = "Invalid Email";
        if (user.phone.length !== 10) newErrors.phone = "Phone must be 10 digits";

        setError(newErrors);
    };

    return (
        <div>
            <h3>USER FORMS</h3>

            <input name="name" placeholder="Enter Your Name" onChange={handleChange} />
            <p>{error.name}</p>

            <input name="email" placeholder="Enter your Email" onChange={handleChange} />
            <p>{error.email}</p>

            <input name="phone" placeholder="Enter the phone number" onChange={handleChange} />
            <p>{error.phone}</p>

            <button onClick={validate}>Submit</button>
        </div>
    );
};

export default CompA;