import React from 'react';
// import './SpellCard.css'
import "../Styles.css";

// import  from 'react-bootstrap';
import {Ability,
     CharacterAbilities,
     CharacterActionType,
     DamageType,
     Schools,
     SpellGrade,
     SpellComponents,
     SpellSchool,
     MainStats,
     Damage,
     SavingThrow } from '../Structs';

export interface CharacterSpellInterface {
    name: string;
    school : Schools;
    range : number | string;
    grade : SpellGrade;
    castingTime : number | string;
    components : Array<string>;
    duration : number | string;
    description?: string;
    attackBonus: number | string;
    savingThrow: SavingThrow;
    damage: {
        type: DamageType;
        amount: number | string;
    };
    notes?: string;
};

export class CharacterSpell extends React.Component<any, CharacterSpellInterface> {
  constructor(props: CharacterSpellInterface) {
    super(props);
    this.state = {
      name: this.props.name,
      grade: this.props.grade,
      school: this.props.school,
      range: this.props.range,
      castingTime: this.props.castingTime,
      components: this.props.components,
      duration: this.props.duration,
      description: this.props.description,
      attackBonus: this.props.attackBonus,
      savingThrow: this.props.savingThrow,
      damage: this.props.damage,
      notes: this.props.notes,
    };
  }

  render(): JSX.Element {
    return (
      //Show spell card with all the info
      <div>
        <div className="action-card">
          <div className="name-action">
            <h2>{this.props.name}</h2>
            <h3>{this.props.school}</h3>
          </div>
          <div className="action-stats">
            <div className="action-stats-row">
              <div className="action-stats-row-item">
                <h3>Range</h3>
                <p>{this.props.range}</p>
              </div>
              <div className="action-stats-row-item">
                <h3>SAVE DC</h3>
                <button>
                  {`${this.props.savingThrow.stat} - ${this.props.savingThrow.value}`}
                </button>
              </div>
              <div className="action-stats-row-item">
                <h3>Damage</h3>
                <button>{this.props.damage.amount}</button>
              </div>
              <div className="action-stats-row-item">
                <h3>Damage Type</h3>
                <p>{this.props.damage.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSpell;
