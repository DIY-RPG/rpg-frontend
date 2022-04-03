import React, {Component} from "react";
import './characterComponents/character.css'
import './components/components.css'
import {Ability, CharacterAbilities, CharacterActionType, DamageType, MainStats, Stat} from "./Structs";
import StatCard from './components/StatCard'
import HPCard from "./components/HealthCard";
import PropsCard from "./components/PropsCard"
import {CharacterTabs} from"./components/TabNavigation";
import ActionCard, { CharacterActionInterface } from "./characterComponents/ActionCard"
import Character, { CharacterState } from "./Character";

class CharacterSheet extends Component {
    constructor(props: CharacterState) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() { 
        return (        
            <div className="sheet-container">
                <CharacterView { ... this.props as CharacterState  } />
                <div className="navigation-container">
                    <CharacterTabs { ... this.props as CharacterState } />
                </div>
            </div> );
    }
}

export const CharacterView = (props: CharacterState) => {
    
    const character  = props;
    const stats = character.stats;
    const actions = character.actions;

    function characterStats(stats: CharacterAbilities) {

        return (
            <div className="stat-container">
                <StatCard {... stats.STR}/>
                <StatCard {... stats.DEX}/>
                <StatCard {... stats.CON}/>
                <StatCard {... stats.INT}/>
                <StatCard {... stats.WIS}/>
                <StatCard {... stats.CHA}/>
            </div>
        );
    }

    
    return (
        <div className="header">
            <div className="name-card">
                <img src="./assets/defIcon.png" className="icon-img" alt="" />
                <text>{props.name}</text>
                <text>{props.characterClass}</text>
                <text>{props.level}</text>

            </div>
            <div className="info-container">
                <div className="details-container">
                    <div className="info-details">
                        <text> Race </text>
                        <text>SubClass 1</text>
                    </div>
                    <div className="info-details">
                        <text> Background </text>
                        <text>Alignment</text>
                    </div>
                    <div className="info-details">
                        <text> Experience </text>
                        <text>{props.XP}</text>
                    </div>
                    <div className="info-details">
                        <text> Proficiency </text>
                        <text>{props.proficiencies.bonus}</text>
                    </div>
                    <div className="info-details">
                        <text> Speed </text>
                        <text>{props.speed}</text>
                    </div>
                    <div className="info-details">
                        <text> Initiative </text>
                        <text>{props.initiative}</text>
                    </div>
                </div>
                <div className="stat-container">
                        {
                            characterStats(props.stats)
                        }
                        <HPCard current={props.HP} max={props.HP} tmp={0}/>
                        <PropsCard label={"AC"} value={props.AC}/>
                </div>

            </div>
            
        </div>

    )
}

export default CharacterSheet;