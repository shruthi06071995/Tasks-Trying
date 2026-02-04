import { use } from "react";
import { useState } from "react";

function CntrlForm() {
    const [email, setEmail] = useState();
    const [on, setOn] = useState(false);

    return (
        <>
            <input value={email} onChange={(e) => setEmail(e.target.value) } />
            <br /><br />
            <button onClick={() => setOn(!on)}>
                {on ? "ON" : "OFF"}
            </button>
        </>
    );
}

export default CntrlForm;