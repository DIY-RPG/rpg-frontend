import React from "react";
import {Ability} from "../Structs"
// import './StatCard.css'
import "../Styles.css";


export const StatCard = (props:Ability) => {

    return (
       <div className="stat-card">
           <label>{props.label}</label>
           <div className="stat-value">
               <label>{props.value}</label>
            </div>
            <div className="stat-mod">
                <label>{props.modifier}</label>
            </div>
       </div>
    );
}

export default StatCard;
