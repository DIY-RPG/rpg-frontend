import React, {useState} from "react";
import { CharacterHP } from "../Structs";
// import './HealthCard.css'
import "../Styles.css";


export const HPCard = (props:CharacterHP) => {

    const [HP, setHP] = useState(props.current)

    return (
      //    <div className="props-card">
      //        <label>HP</label>
      //        <div className="props-value">
      //            <div style={{display: 'flex', flexDirection: 'column', alignSelf:'auto'}}>
      //            <button className="sec-button" onClick={() => setHP(HP+1)}>+</button>
      //            <button className="sec-button" onClick={() => setHP(HP-1)}>-</button>
      //            </div>
      //            <label>{HP}</label>
      //         </div>
      //    </div>
      <div className="hp-card">
        <h2>HP</h2>
        <div className="stat-value">
          <div>
            <button
              className="prymary-button"
              aria-label="Increase HP"
              onClick={() => setHP(HP + 1)}
            >
              +
            </button>
            <button
              className="secondary-button"
              aria-label="Decrease HP"
              onClick={() => setHP(HP - 1)}
            >
              -
            </button>
          </div>
          <span className="label">{HP}</span>
        </div>
      </div>
    );
}

export default HPCard;
