import React, {useState} from "react";
import { Ability } from "../Structs";
import './PropsCard.css'

export const PropsCard = (props: any) => {

    return (
       <div className="props-card">
           <label>{props.label}</label>
           <div className="props-value">
               <label>{props.value}</label>
            </div>
       </div>
    );
}

export default PropsCard;
