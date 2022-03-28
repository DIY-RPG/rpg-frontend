import React from "react";
import './character.css'
import './components/components.css'
import StatCard from './components/StatCard.jsx'
import HPCard from "./components/HealthCard";
import PropsCard from "./components/PropsCard.jsx"
import CharacterTabs from"./components/TabNavigation.jsx"


class CharacterSheet extends React.Component {
    state = {
        loading: true,
        error: null,
        name : 'character', 
    };

    componentDidMount() {
        //init();
    }

    init = () => {
        let name = "character";
    }


    render() {
        return (
            <div className="sheet-container">
                <CharacterView {...this.state} />
                <div className="navigation-container">
                    <CharacterTabs/>
                </div>
           </div>
        );
    }
}

export const CharacterView = (props) => {
    return (
       <div className="header">
           <div className="name-card">
           <img src="./assets/defIcon.png" className="icon-img" alt="" />
           <text>Name</text>
           <text>Class 1</text>
            </div>
            <div className="info-container">
                <div className="info-details">
                    <text>Race</text>
                    <text>SubClass</text>
                    <text>Conditions</text>

                </div>
                <div className="stat-container">
                    <StatCard label="Stat" value="15"/>
                    <StatCard label="Stat" value="15"/>
                    <StatCard label="Stat" value="15"/>
                    <StatCard label="Stat" value="15"/>
                    <StatCard label="Stat" value="15"/>
                    <StatCard label="Stat" value="15"/>
                </div>
                <div className="stat-container">
                    <PropsCard
                        label="AC" 
                        value={15}/>
                    <HPCard
                        label="HP" 
                        value={18}/>

                </div>
            </div>
       </div>  
    
    );
}


export default CharacterSheet;