import React, {useState} from "react";
import { CharacterHP } from "../Structs";
import './HealthCard.css'

export const HPCard = (props:CharacterHP) => {

    const [HP, setHP] = useState(props.current)

    return (
       <div className="props-card">
           <text>HP</text>
           <div className="props-value">
               <div style={{display: 'flex', flexDirection: 'column', alignSelf:'auto'}}>
               <button className="sec-button" onClick={() => setHP(HP+1)}>+</button>
               <button className="sec-button" onClick={() => setHP(HP-1)}>-</button>
               </div>
               <text>{HP}</text>
            </div>
       </div>
    );
}

export default HPCard;
