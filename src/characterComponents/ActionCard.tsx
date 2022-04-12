import React from 'react';
import {Ability, CharacterAbilities, CharacterActions, CharacterActionType, Damage, DamageType, MainStats} from '../Structs';
import './ActionCard.css'

export interface CharacterActionInterface {
    name?: string;
    type?: CharacterActionType;
    range?:  number | string;
    toHit?: number | string;
    damage?: number | string;
    damageType?: DamageType;
    description?: string;
    attack?: string;
    advantage?: boolean;
    disadvantage?: boolean;
    critical?: boolean;
    criticalMultiplier?: 2,
    criticalRange?: number | string;
    criticalDamage?: number | string;
    criticalDamageType?: DamageType;
    criticalDescription?: string;
    notes?: string;
}

// Resolve this any
export class CharacterAction extends React.Component<any, CharacterActionInterface>{

    constructor(props: CharacterActionInterface) {
        super(props);
        this.state = {
            name: this.props.name,
            type : this.props.type,
            range: this.props.range,
            toHit: this.props.toHit,
            damage: this.props.damage,
            damageType: this.props.damageType,
            description: this.props.description,
            attack: this.props.attack,
            advantage: this.props.advantage,
            disadvantage: this.props.disadvantage,
            critical: this.props.critical,
            criticalMultiplier: this.props.criticalMultiplier,
            criticalRange: this.props.criticalRange,
            criticalDamage: this.props.criticalDamage,
            criticalDamageType: this.props.criticalDamageType,
            criticalDescription: this.props.criticalDescription,
            notes: this.props.notes
        };

    }


    render() {

    return (
        //Show Action Card
        <div>
            <div className="action-card">
                <div className="name-action">
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.type}</h3>
                </div>
                <div className="action-stats">
                    <div className="action-stats-row">
                        <div className="action-stats-row-item">
                            <h3>Range</h3>
                            <p>{this.props.range}</p>
                        </div>
                        <div className="action-stats-row-item">
                            <h3>To Hit</h3>
                            <button>{this.props.toHit}</button>
                        </div>
                        <div className="action-stats-row-item">
                            <h3>Damage</h3>
                            <button>{this.props.damage}</button>
                        </div>
                        <div className="action-stats-row-item">
                            <h3>Damage Type</h3>
                            <p>{this.props.damageType}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CharacterAction;
