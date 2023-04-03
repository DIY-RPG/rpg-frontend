import React, { Component } from "react";
import CharacterAction, { CharacterActionInterface } from "../characterComponents/ActionCard";
import { CharacterSpell, CharacterSpellInterface } from "../characterComponents/SpellCard";
import CharacterSheet from "../characterComponents/CharacterSheet";
import {
  Stat,
  DefaultColors,
  Ability,
  CharacterAbilities,
  CharacterSkills,
  Item,
  SpellGradeMap,
  SpellGrade,
  Equipment,
} from "../Structs";
import CharacterEquipment from "../characterComponents/Equipment";
import { Modifier } from "typescript";

class Character extends Component<CharacterProps, CharacterState> {
  constructor(props: CharacterProps) {
    super(props);
    this.state = props.character;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    return (
      <div>
        <CharacterSheet {...this.state} />
      </div>
    );
  }
}
export interface CharacterProps {
  user_id: string;
  character: CharacterState;
}

export interface CharacterState {
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
  spells: Array<CharacterSpellInterface>;
  equipment: Equipment;
  inventory: Array<Item>;
  notes: Array<string>;
  stats: CharacterAbilities;
  skills: CharacterSkills;
  proficiencies: {
    bonus: Number;
    spellDC: Number;
    spellBonus: Number;
    other: Array<String>;
  };
  currentModifiers?: Array<Modifier>;
  dispatchModifiers?: (modifiers: any) => void;
  details: {
    subClass?: String;
    race?: String;
    background?: String;
    alignment?: String;
    age?: Number;
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
    defenses?: Array<string>;
    trackables?: Array<string>;
    currency?: Array<string>;
    personalityTraits?: Array<string>;
  };
}

// Lazaro

const LazaroStats: CharacterAbilities = {
  STR: {
    name: "Strength",
    label: "STR",
    value: 10,
    modifier: 0,
    proficient: false,
  },
  DEX: {
    name: "Dexterity",
    label: "DEX",
    value: 15,
    modifier: 2,
    proficient: false,
  },
  CON: {
    name: "Constitution",
    label: "CON",
    value: 16,
    modifier: 3,
    proficient: false,
  },
  INT: {
    name: "Intelligence",
    label: "INT",
    value: 12,
    modifier: 1,
    proficient: false,
  },
  WIS: {
    name: "Wisdom",
    label: "WIS",
    value: 14,
    modifier: 2,
    proficient: false,
  },
  CHA: {
    name: "Charisma",
    label: "CHA",
    value: 8,
    modifier: -1,
    proficient: false,
  },
};

const LazaroSkills: CharacterSkills = {
  Acrobatics: {
    name: "Acrobatics",
    value: 0,
    modifier: LazaroStats.DEX,
    proficient: false,
  },
  AnimalHandling: {
    name: "Animal Handling",
    value: 0,
    modifier: LazaroStats.WIS,
    proficient: false,
  },
  Arcana: {
    name: "Arcana",
    value: 0,
    modifier: LazaroStats.INT,
    proficient: false,
  },
  Athletics: {
    name: "Athletics",
    value: 0,
    modifier: LazaroStats.STR,
    proficient: false,
  },
  Deception: {
    name: "Deception",
    value: 0,
    modifier: LazaroStats.CHA,
    proficient: true,
  },
  History: {
    name: "History",
    value: 0,
    modifier: LazaroStats.INT,
    proficient: false,
  },
  Insight: {
    name: "Insight",
    value: 0,
    modifier: LazaroStats.WIS,
    proficient: false,
  },
  Intimidation: {
    name: "Intimidation",
    value: 0,
    modifier: LazaroStats.CHA,
    proficient: true,
  },
  Investigation: {
    name: "Investigation",
    value: 0,
    modifier: LazaroStats.INT,
    proficient: false,
  },
  Medicine: {
    name: "Medicine",
    value: 0,
    modifier: LazaroStats.WIS,
    proficient: false,
  },
  Nature: {
    name: "Nature",
    value: 0,
    modifier: LazaroStats.INT,
    proficient: false,
  },
  Perception: {
    name: "Perception",
    value: 0,
    modifier: LazaroStats.WIS,
    proficient: false,
  },
  Performance: {
    name: "Performance",
    value: 0,
    modifier: LazaroStats.CHA,
    proficient: true,
  },
  Persuasion: {
    name: "Persuasion",
    value: 0,
    modifier: LazaroStats.CHA,
    proficient: true,
  },
  Religion: {
    name: "Religion",
    value: 0,
    modifier: LazaroStats.INT,
    proficient: false,
  },
  SleightOfHand: {
    name: "Sleight of Hand",
    value: 0,
    modifier: LazaroStats.DEX,
    proficient: false,
  },
  Stealth: {
    name: "Stealth",
    value: 0,
    modifier: LazaroStats.DEX,
    proficient: false,
  },
  Survival: {
    name: "Survival",
    value: 0,
    modifier: LazaroStats.WIS,
    proficient: false,
  },
};

const LazaroState: CharacterState = {
  id: "Lazaro",
  name: "Lazaro Blackstar",
  characterClass: "Rogue",
  level: 13,
  HP: 100,
  AC: 20,
  XP: 0,
  initiative: 2,
  speed: 30,
  actions: [
    {
      name: "Sneak Attack",
      type: "Melee" || "Ranged",
      description: "Rogue Attack",
      damage: "1d6",
      damageType: "Piercing",
      range: 30,
      toHit: 5,
      advantage: true,
      critical: true,
      criticalMultiplier: 2,
      criticalRange: 20,
      criticalDamage: "1d6",
      criticalDamageType: "Piercing",
      criticalDescription: "Rogue Critical Attack",
      notes: "Rogue Attack Notes",
    },
  ],
  spells: [
    {
      name: "Poison Spray",
      school: "Conjuration",
      range: 10,
      grade: "Cantrip",
      castingTime: "1 Action",
      components: ["V", "S"],
      duration: "Instantaneous",
      description:
        "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
      attackBonus: 5,
      savingThrow: {
        stat: "CON",
        value: 10,
        modifier: "WIS",
        proficient: false,
      },
      damage: {
        type: "Poison",
        amount: "1d12",
      },
      notes: "Rogue Spell Notes",
    },
  ],
  equipment: {
    items: [
      {
        name: "Dagger",
        type: "Weapon",
        weight: 1,
        value: 2,
        properties: ["Finesse", "Light", "Thrown"],
        notes: "Rogue Weapon Notes",
        equipped: true,
        modifier: {
          stat: "DEX",
          value: 2,
          type: "Attack",
          description: "Rogue Weapon Proficiency",
        },
        quantity: 2,
        description: "Rogue Weapon",
      },

      {
        name: "Shield of the Hidden Lord",
        type: "Armor",
        description:
          "A shield that grants the wearer the ability to hide in plain sight. It is a +1 shield that grants the wearer advantage on stealth checks. It also grants the wearer the ability to cast the spell 'Pass Without Trace' once per day.",
        weight: 1,
        value: 5000,
        properties: ["Light"],
        notes: "Rogue Armor Notes",
        equipped: true,
        modifier: {
          stat: "DEX",
          value: 1,
          type: "AC",
          description: "The shield grants the wearer a +1 AC bonus.",
        },
        quantity: 1,
      },
      {
        name: "Leather Armor",
        type: "Armor",
        description: "Rogue Armor",
        weight: 1,
        value: 2,
        properties: ["Light"],
        notes: "Rogue Armor Notes",
        equipped: true,
        modifier: {
          type: "AC",
          value: 2,
          description: "Rogue Armor Proficiency",
        },
        quantity: 1,
      },
    ],

    weight: 2,
    value: 2,
    money: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 0,
      pp: 0,
    },
  },
  inventory: [],
  notes: [],
  stats: LazaroStats,
  skills: LazaroSkills,
  proficiencies: {
    bonus: 2,
    spellDC: 12,
    spellBonus: 5,
    other: [],
  },

  details: {
    subClass: "Thief",
    race: "Elf",
    alignment: "Chaotic Neutral",
    background: "Criminal",
    age: 115,
  },
};

const LazaroProps: CharacterProps = {
  user_id: "1",
  character: LazaroState,
};

export const Lazaro = LazaroProps;

export default Character;
