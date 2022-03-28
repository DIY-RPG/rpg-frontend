import React from "react";
import './components.css'

export const StatCard = (props) => {

    return (
       <div className="stat-card">
           <text>{props.label}</text>
           <div className="stat-value">
               <text>{props.value}</text>
            </div>
       </div>
    );
}

export default StatCard;