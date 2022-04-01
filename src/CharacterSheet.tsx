import React, {Component} from "react";
import './character.css'
import './components/components.css'
import {Ability, CharacterAbilities, CharacterActionType, DamageType, MainStats, Stat} from "./Structs";
import StatCard from './components/StatCard'
import HPCard from "./components/HealthCard";
import PropsCard from "./components/PropsCard"
import {CharacterTabs} from"./components/TabNavigation";
import ActionCard, { CharacterActionInterface } from "./characterComponents/ActionCard"
import Character, { CharacterState } from "./Character";
import { stat } from "fs/promises";
import { Stats } from "fs";

class CharacterSheet extends Component {
    constructor(props: CharacterState) {
        super(props);
        props.actions.forEach(action => {
            if (action.type === CharacterActionType.Attack) {
                action.damage.forEach(damage => {
                    if (damage.type === DamageType.Physical) {
                        this.props.stats.strength.value += damage.value;
                    }
                });
            }
            
        this.state = props;
    })
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
            <div className="stats-container">
                <div className="stats-container">
                    <div className="stats-container">
                        <StatCard label="STR" name="Strength" value={stats.STR?.value } modifier={stats.STR?.modifier} proficient={stats.STR?.proficient}/>
                        <StatCard label="DEX" name="Dexterity" value={stats.DEX?.value } modifier={stats.DEX?.modifier} proficient={stats.DEX?.proficient}/>
                        <StatCard label="CON" name="Constitution" value={stats.CON?.value } modifier={stats.CON?.modifier} proficient={stats.CON.proficient}/>
                        <StatCard label="INT" name="Intelligence" value={stats.INT?.value } modifier={stats.INT?.modifier} proficient={stats.INT?.proficient}/>
                        <StatCard label="WIS" name="Wisdom" value={stats.WIS?.value } modifier={stats.WIS?.modifier} proficient={stats.WIS?.proficient}/>
                        <StatCard label="CHA" name="Charisma" value={stats.CHA?.value } modifier={stats.CHA?.modifier} proficient={stats.CHA?.proficient}/>
                    </div>
                </div>
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
                <div className="info-details">
                    <text> Race </text>
                    <text>SubClass 1</text>
                </div>
                <div className="stat-container">
                    {
                        characterStats(props.stats)
                    }
                </div>
                <div className="info-details">
                    <text> Background </text>
                    <text>Alignment</text>
                </div>
            </div>
            <div className="info-container">
                <div className="info-details">
                    <text> Experience </text>
                    <text>{props.XP}</text>
                </div>
                <div className="info-details">
                    <text> Proficiency </text>
                    <text>{props.proficiencies.bonus}</text>
                </div>
            </div>
            <div className="info-container">
                <div className="info-details">
                    <text> Speed </text>
                    <text>{props.speed}</text>
                </div>
                <div className="info-details">
                    <text> Initiative </text>
                    <text>{props.initiative}</text>
                </div>
            </div>
            <div className="info-container">
                <div className="info-details">
                    <text> HP </text>
                    <text>{props.HP}</text>
                </div>
               
                <div className="info-details">
                    <text> AC </text>
                    <text>{props.AC}</text>
                </div>
            </div>
            <div className="info-container">
                <div className="info-details">
                    <text> Initiative </text>
                    <text>{props.initiative}</text>
                </div>
            </div>
        </div>
        )
}

export default CharacterSheet;