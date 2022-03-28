import React, {useState} from "react";
import './components.css'

export const HPCard = (props) => {

    const [HP, setHP] = useState(props.value)

    return (
       <div className="props-card">
           <text>{props.label}</text>
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