import React, { Component } from "react";
import CharacterAction, { CharacterActionInterface } from "./characterComponents/ActionCard";
import { CharacterSpell } from "./characterComponents/SpellCard";
import CharacterSheet from "./CharacterSheet";
import { Stat, DefaultColors, Ability, CharacterAbilities, CharacterSkills, Item} from "./Structs";

export interface  CharacterProps {

    user_id: string;

}

export interface  CharacterState {

    id: string;
    name: string;
    characterClass: string;
    level: number;
    HP: number;
    AC: number;
    XP: number;
    initiative: number;
    speed: number;
    actions: Array<CharacterActionInterface>;
    spells: Array<CharacterSpell>;
    inventory: Array<Item>;
    equipment: Array<Item>;
    notes: Array<string>;
    stats: CharacterAbilities;
    skills: CharacterSkills;
    proficiencies:{
        bonus: Number;
        spellDC: Number;
        spellBonus: Number;
        other: Array<String>;
    };
    details : {
        subClass?: String;
        race?: String;
        background?: String;
        alignment?: String;
        age?: Number
        height?: Number;
        weight?: Number;
        eyes?: DefaultColors;
        hair?: DefaultColors;
        skin?: DefaultColors;
        traits?: Array<string>;
        ideals?: Array<string>;
        bonds?: Array<string>;
        flaws?: Array<string>;
        languages?: Array<string>;
        features?: Array<string>;
        equipment?: Array<string>;
        defenses?: Array<string>;
        trackables?: Array<string>;
        currency?: Array<string>;
        personalityTraits?: Array<string>;
    };


}


class Character extends Component< CharacterProps,  CharacterState> {
    state:  CharacterState = {
        id: "123456",
        name: "Lazarous Blackstar",
        characterClass: "Roge",
        level: 11,
        HP: 88,
        AC: 19,
        XP: 0,
        initiative: 0,
        speed: 0,
        actions: [
            {
                name: "Sneak Attack",
                type: "Melee",
                range: "5",
                toHit: "1d20",
                damage: "1d8",
                damageType: "Piercing",
                description: "You attack a creature you can see within 5 feet of you. You make a melee weapon attack against the target. If the attack hits, you add your Charisma modifier to the attack roll. You have advantage on the attack roll if the target is invisible, or the target is behind cover and you are able to see it.",
                attack: "1d20 + Charisma modifier",
                advantage: true,
                disadvantage: false,
                critical: false,
                criticalMultiplier: 2,
                criticalRange: 20,
                criticalDamage: "1d8",
                criticalDamageType: "Piercing",
                criticalDescription: "",
                notes: "",
            },
        ],
        spells: [],
        inventory: [],
        equipment: [],
        notes: [],

        stats: {
            STR : { label: "STR", name:"Strength", value: 0, modifier: 0, proficient: false},
            DEX : { label: "DEX", name:"Dexterity", value: 0, modifier: 0, proficient: false},
            CON : { label: "CON", name:"Constitution", value: 0, modifier: 0, proficient: false},
            INT : { label: "INT", name:"Intelligence", value: 0, modifier: 0, proficient: false},
            WIS : { label: "WIS", name:"Wisdom", value: 0, modifier: 0, proficient: false},
            CHA : { label: "CHA", name:"Charisma", value: 0, modifier: 0, proficient: false}
        },

        skills: {
            Acrobatics: {
                name: "Acrobatics",
                value: 0,
                modifier: 0,
                proficient: false
            },
            AnimalHandling: {
                name: "Animal Handling",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Arcana: {
                name: "Arcana",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Athletics: {
                name: "Athletics",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Deception: {
                name: "Deception",
                value: 0,
                modifier: 0,
                proficient: false
            },
            History: {
                name: "History",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Insight: {
                name: "Insight",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Intimidation: {
                name: "Intimidation",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Investigation: {
                name: "Investigation",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Medicine: {
                name: "Medicine",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Nature: {
                name: "Nature",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Perception: {
                name: "Perception",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Performance: {
                name: "Performance",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Persuasion: {
                name: "Persuasion",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Religion: {
                name: "Religion",
                value: 0,
                modifier: 0,
                proficient: false
            },
            SleightOfHand: {
                name: "Sleight of Hand",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Stealth: {
                name: "Stealth",
                value: 0,
                modifier: 0,
                proficient: false
            },
            Survival: {
                name: "Survival",
                value: 0,
                modifier: 0,
                proficient: false
            }
        },

        proficiencies:{
            bonus: 0,
            spellDC: 0,
            spellBonus: 0,
            other: []
        },
        
        details : {
            subClass: "",
            race: "",
            background: "",
            alignment: "",
            age: 0,
            height: 0,
            weight: 0,
            eyes: "",
            hair: "",
            skin: "",
            traits: [],
            ideals: [],
            bonds: [],
            flaws: [],
            languages: [],
            features: [],
            equipment: [],
            defenses : [],
            trackables : [],
            currency: [],
            personalityTraits: [],
        },
    };

    render() {
        return (
           <div>
               <CharacterSheet {...this.state}/>
           </div>
        );
    }
}

export default Character;