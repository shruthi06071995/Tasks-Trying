import { useContext } from "react";
import { UserContext } from "./UserContext";

const CompB = () => {
    const [style, setStyle] = useContext(UserContext);

    return (
        <div>
            <h3>STYLE SETTINGS (STYLE CONTROL)</h3>

            <input placeholder="Text Color" onChange={(e) => setStyle({ ...style, color: e.target.value })} />

            <input placeholder="Background Color" onChange={(e) => setStyle({
                ...style, color: e.target.value
            })} />

            <input placeholder="Text Sixe (e.g. 20px)"
                onChange={(e) => setStyle({
                    ...style, fontSize: e.target.value
                })}
            />
        </div>
    );
}

export default CompB;