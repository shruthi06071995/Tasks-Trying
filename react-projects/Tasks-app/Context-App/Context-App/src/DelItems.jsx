import { useEffect, useState } from "react";

const DelItems = () => {
    const [items, setItems] = useState(["Apple", "Orange"]);

    const deleteItem = (item) => {
        setItems(items.filter(i => i !== item));
    };

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log("Fetching API data using useeffect:", data))
    },[]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    {item}
                    <button onClick={() => deleteItem(item)}>Delete</button>
                </div>
            ))}
        </div>
    );  
};

export default DelItems;