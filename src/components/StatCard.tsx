import React from "react";
import {Ability} from "../Structs"
import './components.css'

export const StatCard = (props:Ability) => {

    return (
       <div className="stat-card">
           <text>{props.label}</text>
           <div className="stat-value">
               <text>{props.value}</text>
            </div>
            <div className="stat-mod">
                <text>{props.modifier}</text>
            </div>
       </div>
    );
}

export default StatCard;