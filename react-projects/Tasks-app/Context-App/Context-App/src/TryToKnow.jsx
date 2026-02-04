import { useState } from "react"

function TryToKnow() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Click the buttons to see the values: {count}</h2>
            <button onClick={() => setCount (count + 1)}>+</button>
            <button onClick={() => setCount (count - 4)}>-</button>
        </>
    );

    
}

export default TryToKnow;