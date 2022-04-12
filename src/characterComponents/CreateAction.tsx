import React from 'react';
import './CreateAction.css';
import {Ability, CharacterAbilities, CharacterActions, CharacterActionType, Damage, DamageType, MainStats} from '../Structs';

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
        <div>
            <div>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div>
                <label>Type:</label>
                <select>
                    {
                        Object.keys(CharacterActions).map((key, index) => {
                            return <option value={key}>{CharacterActions.get(index)}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Range:</label>
                <input type="number" value={this.state.range} onChange={(e) => this.setState({range: e.target.value})}/>
            </div>
            <div>
                <label>Description:</label>

                <textarea value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
            </div>
            <div>
                <label>Attack Bonus:</label>
                <input type="number" value={this.state.toHit} onChange={(e) => this.setState({toHit: e.target.value})}/>
            </div>
            <div>
                <label>Ability:</label>
                <select>
                    {
                        Object.keys(MainStats).map((key, index) => {
                            return <option value={key}>{MainStats.get(index)} </option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Damage:</label>
                <select>
                    {
                        Object.keys(Damage).map((key, index) => {
                            return <input type="radio" name="damage" value={key}/>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={this.state.damage} onInput={(e) => this.setState({damage:e.currentTarget.value})}/>
            </div>
            <div>
                <label>Notes:</label>
                <textarea value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})}/>
            </div>
        </div>
        );
    }
}

export default CharacterAction;
