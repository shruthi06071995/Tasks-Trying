function Mapi() {
    const names = ["A", "B", "C"];

    return (
        <ul>
            {names.map((n, i) => (
                <li key={i}>{n}</li>
            ))}
        </ul>
    );
}

export default Mapi;