import React, { Component } from "react";
import {
  Ability,
  CharacterAbilities,
  CharacterActionType,
  DamageType,
  MainStats,
  Stat,
  Equipment,
  Item,
  Modifier,
  Skill,
  ModifierTypes,
} from "../Structs";
import StatCard from "../characterComponents/StatCard";
import HPCard from "../characterComponents/HealthCard";
import PropsCard from "../characterComponents/PropsCard";
import { CharacterTabs } from "../characterComponents/CharacterTabs";
import ActionCard, {
  CharacterActionInterface,
} from "../characterComponents/ActionCard";
import Character, { CharacterState } from "./Character";

class CharacterSheet extends Component<CharacterState, CharacterState> {
  constructor(props: CharacterState) {
    super(props);
    this.state = props;
  }

  //Make a function to bind the equimpent modifiers to the character
  dispatchModifiers = (modifiers: Array<Modifier>) => {
    let equipment: Equipment = this.state.equipment;
    // let modifiers: Array<Modifier> = [];

    equipment.items.forEach((item: Item) => {
      if (item.equipped) {
        modifiers.push(item.modifier);
      }
    });

    function isSkill(object: any): object is Skill {
      return "stat" in object;
    }

    function isStat(object: any): object is Stat {
      return "value" in object;
    }

    if (modifiers) {
      modifiers.forEach((modifier: Modifier) => {
        let modType: ModifierTypes = modifier.type;

        switch (modType) {
          case "AC":
            modifier.value &&
              this.setState({ AC: this.state.AC + modifier.value });
            console.log("AC Modifier Applied");
            break;
          case "HP":
            modifier.value &&
              this.setState({ HP: this.state.HP + modifier.value });
            break;
          case "Skill":
            if (isSkill(modifier)) {
              let skill: Skill = modifier;
              // modifier.value && this.setState({ skills : this.state.skills[skill.stat] + modifier.value });
            }
            break;
        }
      });
    }
  };

  componentDidMount() {}

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  componentDidUpdate(
    prevProps: Readonly<CharacterState>,
    prevState: Readonly<CharacterState>,
    snapshot?: any
  ): void {
    console.log("Character Sheet Updated");
    // this.addEquipmentModifiers();
  }

  render() {
    return (
      <div className="sheet-container">
        <CharacterView {...(this.state as CharacterState)} />
        <div className="navigation-container">
          <CharacterTabs
            {...(this.state as CharacterState)}
            dispatchModifiers={this.dispatchModifiers}
            currentModifiers={this.state.currentModifiers}
          />
        </div>
      </div>
    );
  }
}

export const CharacterView = (props: CharacterState) => {
  const character = props;
  const stats = character.stats;
  const actions = character.actions;

  function characterStats(stats: CharacterAbilities) {
    return (
      <div className="stat-container">
        <StatCard {...stats.STR} />
        <StatCard {...stats.DEX} />
        <StatCard {...stats.CON} />
        <StatCard {...stats.INT} />
        <StatCard {...stats.WIS} />
        <StatCard {...stats.CHA} />
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
            <text>{props.proficiencies?.bonus}</text>
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
          {characterStats(props.stats)}
          <HPCard current={props.HP} max={props.HP} tmp={0} />
          <PropsCard label={"AC"} value={props.AC} />
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
