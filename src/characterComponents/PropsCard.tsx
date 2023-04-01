import React, {useState} from "react";
import { Ability } from "../Structs";
// import './PropsCard.css'
import "../Styles.css";


export const PropsCard = (props: any) => {

    return (
      <div className="hp-card">
        <label>{props.label}</label>
        <div className="props-value">
          <label>{props.value}</label>
        </div>
      </div>
    );
}

export default PropsCard;
