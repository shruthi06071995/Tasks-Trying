import { useState } from "react"

const Login = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if (name === "") alert("Error");
        else alert("Success");
    };

    return (
        <>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default Login;
