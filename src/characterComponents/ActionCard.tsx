import { AnyRecord } from 'dns';
import React from 'react';
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
};

///Resolve this any
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
            <div>
                <label>{this.props.name}</label>
                <h1>{this.props.type}</h1>
            </div>
        </div>

        );
    }
}
 
export default CharacterAction;