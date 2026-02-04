import { useReducer, useState } from "react"

function New() {
    
    const counter = (state, action) => {
        switch (action.type)
        {
            case "in":
                return state + parseInt(action.payLoad)
            
            case "de":
                return state - 1
            
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(counter, 0);
    const [data, setData] = useState(0);
    return (
        <>
            <h4>{count}</h4>
            <input type="number" onChange={(e) => setData(e.target.value)} />
            <button onClick={() => dispatch({type: "in", payLoad: data})}>Increment</button>
            <button onClick={() => dispatch({type: "de"})}>Decrement</button>
        </>
    );
}

export default New;