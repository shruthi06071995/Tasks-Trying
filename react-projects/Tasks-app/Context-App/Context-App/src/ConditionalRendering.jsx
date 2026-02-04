import { useState } from "react"

const ConditionalRendering = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <p>Hello React</p>}
        </>
    );
}

export default ConditionalRendering;