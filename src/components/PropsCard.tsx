import React, {useState} from "react";
import { Ability } from "../Structs";
import './components.css'

export const PropsCard = (props: any) => {

    return (
       <div className="props-card">
           <text>{props.label}</text>
           <div className="props-value">
               <text>{props.value}</text>
            </div>
       </div>
    );
}

export default PropsCard;