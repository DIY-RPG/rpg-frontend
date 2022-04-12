import './CharacterSheet.css'
import React, {Component} from "react";
import StatCard from './StatCard'
import HPCard from "./HealthCard";
import PropsCard from "./PropsCard"
import {CharacterTabs} from "./CharacterTabs";
import ActionCard, { CharacterActionInterface } from "./ActionCard"
import Character, { CharacterState } from "../pages/Character";
import {Ability, CharacterAbilities, CharacterActionType, DamageType, MainStats, Stat} from "../Structs";

class CharacterSheet extends Component {
    constructor(props: CharacterState) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="sheet-container">
                <CharacterView {...this.props as CharacterState} />
                <div className="navigation-container">
                    <CharacterTabs {...this.props as CharacterState} />
                </div>
            </div>
        );
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
                <img src="./assets/defIcon.png" className="icon-img" alt=""/>
                <label>{props.name}</label>
                <label>{props.characterClass}</label>
                <label>{props.level}</label>
            </div>
            <div className="info-container">
                <div className="details-container">
                    <div className="info-details">
                        <label> Race</label>
                        <label>SubClass 1</label>
                    </div>
                    <div className="info-details">
                        <label> Background</label>
                        <label>Alignment</label>
                    </div>
                    <div className="info-details">
                        <label> Experience</label>
                        <label>{props.XP}</label>
                    </div>
                    <div className="info-details">
                        <label> Proficiency</label>
                        <label>{props.proficiencies.bonus}</label>
                    </div>
                    <div className="info-details">
                        <label> Speed</label>
                        <label>{props.speed}</label>
                    </div>
                    <div className="info-details">
                        <label> Initiative</label>
                        <label>{props.initiative}</label>
                    </div>
                </div>
                <div className="stat-container">
                    {characterStats(props.stats)}
                    <HPCard current={props.HP} max={props.HP} tmp={0}/>
                    <PropsCard label={"AC"} value={props.AC}/>
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet;
