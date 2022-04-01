import React from 'react';
// import  from 'react-bootstrap';
import {Ability, CharacterAbilities, CharacterActionType, DamageType, Schools, SpellGrade, SpellComponents, SpellSchool, MainStats, Damage } from '../Structs';

export interface CharacterSpellInterface {
    name: string;
    school : Schools;
    range : number | string;
    grade : typeof SpellGrade;
    castingTime : number;
    components : Array<string>;
    duration : number | string;
    description?: string;
    attackBonus: number | string;
    ability: Ability;
    damage: {
        type: DamageType;
        amount: number;
    };
    notes?: string;
};

export class CharacterSpell extends React.Component<CharacterSpellInterface, CharacterSpellInterface> {

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
            ability: this.props.ability,
            damage: this.props.damage,
            notes: this.props.notes
        };
    }

    render(): JSX.Element {

    return (
        <div>
            <div>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div>
                <label>School:</label>
                {/* <select value={this.state.school} onChange={(e) => this.setState({school: e.target.value})}>
                    <option value="Abjuration">Abjuration</option>
                    <option value="Conjuration">Conjuration</option>
                    <option value="Divination">Divination</option>
                    <option value="Enchantment">Enchantment</option>
                    <option value="Evocation">Evocation</option>
                    <option value="Illusion">Illusion</option>
                    <option value="Necromancy">Necromancy</option>
                    <option value="Transmutation">Transmutation</option>
                </select> */}
                <select>
                    {
                        Object.keys(SpellSchool).map((key, index) => {
                            return <option value={key}>{SpellSchool.get(index)}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Range:</label>
                <input type="number" value={this.state.range} onChange={(e) => this.setState({range: e.target.value})}/>
            </div>
            <div>
                <label>Casting Time:</label>
                <input type="number" value={this.state.castingTime} onInput={(e) => this.setState({castingTime: e.currentTarget.valueAsNumber})}/>
            </div>
            <div>
                <label>Components:</label>

            </div>
            <div>
                <label>Duration:</label>
                <input type="number" value={this.state.duration} onInput={(e) => this.setState({duration: e.currentTarget.value})}/>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
            </div>
            <div>
                <label>Attack Bonus:</label>
                <input type="text" value={this.state.attackBonus} onChange={(e) => this.setState({attackBonus: e.target.value})}/>
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
                <label>Notes:</label>
                <textarea value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})}/>
            </div>
        </div>

        );
    }
}
 
export default CharacterSpell;