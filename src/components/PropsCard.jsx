import React, {useState} from "react";
import './components.css'

export const PropsCard = (props) => {

    //const [HP, setHP] = useState(props.value)

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