import { useContext } from "react";
import { UserContext } from "./Context";

function CompB() {
    const { style, setStyle} = useContext(UserContext);

    return (
        <div>
            <h3><b><u>Component - B - Style</u></b></h3>

            <input placeholder="Text Color" onChange={(e) => setStyle({...style, color: e.target.value})} /> <br /><br />
            <input placeholder="Background Color" onChange={(e) => setStyle({...style, bgColor: e.target.value})} /> <br /><br />
            <input placeholder="Font Size (px)" onChange={(e) => setStyle({...style, fontSize: e.target.value})} /> <br /><br />
        </div>
    );
}

export default CompB;