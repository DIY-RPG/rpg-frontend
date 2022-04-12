
export type Stat = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA"

export type CharacterActionType = "Melee"|"Ranged"|"Spell"|"Power"|"Special"|"Potion"|"Magic Item"|"Other"

export type Schools = "Abjuration"|"Conjuration"|"Divination"|"Enchantment"|"Evocation"|"Illusion"|"Necromancy"|"Transmutation"

export type DamageType = "Acid"|"Bludgeoning"|"Cold"|"Fire"|"Force"|"Lightning"|"Necrotic"|"Piercing"|"Poison"|"Psychic"|"Radiant"|"Slashing"|"Thunder";

export type SpellGrade = "Cantrip"|"1st"|"2nd"|"3rd"|"4th"|"5th"|"6th"|"7th"|"8th"|"9th"

export type Ability = {
    label:  "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" ;
    name: "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" ;
    value?: number;
    modifier?: number;
    proficient?: Boolean;
}

export interface Skill {
    name: "Acrobatics"|"Animal Handling"|"Arcana"|"Athletics"|"Deception"|"History"|"Insight"|"Intimidation"|"Investigation"|"Medicine"|"Nature"|"Perception"|"Performance"|"Persuasion"|"Religion"|"Sleight of Hand"|"Stealth"|"Survival";
    value?: number;
    modifier: Ability;
    proficient?: Boolean;
}

export interface CharacterAbilities {
    STR: Ability
    DEX: Ability
    CON: Ability
    INT: Ability
    WIS: Ability
    CHA: Ability

}

export interface CharacterSkills {
    Acrobatics: Skill,
    AnimalHandling: Skill,
    Arcana: Skill,
    Athletics: Skill,
    Deception: Skill,
    History: Skill,
    Insight: Skill,
    Intimidation: Skill,
    Investigation: Skill,
    Medicine: Skill,
    Nature: Skill,
    Perception: Skill,
    Performance: Skill,
    Persuasion: Skill,
    Religion: Skill,
    SleightOfHand: Skill,
    Stealth: Skill,
    Survival: Skill,
}


export interface CharacterHP {
    current: number;
    max: number;
    tmp: number;
}

export const MainStats: Array<string> = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
];

export const SpellGradeMap: Map<number, string> = new Map([
    [0, "Cantrip"],
    [1, "1st-level"],
    [2, "2nd-level"],
    [3, "3rd-level"],
    [4, "4th-level"],
    [5, "5th-level"],
    [6, "6th-level"],
    [7, "7th-level"],
    [8, "8th-level"],
    [9, "9th-level"],
]);

export interface SavingThrow {
    stat: Stat;
    value: number;
    modifier: Stat;
    proficient: Boolean;
}

export const SpellSchool : Array<Schools> = [
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation",
];


export const SpellComponents = [
    {
        label: "V",
        value: "Verbal"
    },
    {
        label: "S",
        value: "Somatic"
    },
    {
        label: "M",
        value: "Material",
        materials: Array<String>()
    }
];

export const Damage: Array<string> = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
];

export const CharacterActions: Array<string> = [
    "Melee",
    "Ranged",
    "Spell",
    "Power",
    "Special",
    "Potion",
    "Magic Item",
    "Other",
];



export interface Item {
    name: string;
    type: typeof ItemTypes;
    description: string;
    weight: number;
    value: number;
    quantity: number;
    properties: Array<string>;
}

export let ItemTypes = [
    "Weapon",
    "Armor",
    "Gear",
    "Consumable",
    "Tool",
    "Potion",
    "Magic Item",
    "Other"
] as const

export type DefaultColors = ""| "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"| "black"| "white"| "gray"| "purple"| "pink"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "brown"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "brown"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "brown"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "brown"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "brown"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon"| "navy"| "aqua"| "silver"| "gold"| "gray"| "black"| "white"| "tan"| "olive"| "teal"| "lime"| "maroon";

export const DefaultColorsMap: Map<string, string> = new Map([
    ['red', '#ff0000'],
    ['orange', '#ffa500'],
    ['yellow', '#ffff00'],
    ['green', '#008000'],
    ['blue', '#0000ff'],
    ['indigo', '#4b0082'],
    ['violet', '#ee82ee'],
    ['black', '#000000'],
    ['white', '#ffffff'],
    ['brown', '#a52a2a'],
    ['grey', '#808080'],
    ['silver', '#c0c0c0'],
    ['gold', '#ffd700'],
    ['pink', '#ffc0cb'],
    ['purple', '#800080'],
    ['teal', '#008080'],
    ['olive', '#808000'],
    ['maroon', '#800000'],
    ['lime', '#00ff00'],
    ['aqua', '#00ffff'],
    ['sky blue', '#87ceeb'],
    ['magenta', '#ff00ff'],
    ['cyan', '#00ffff'],
    ['goldenrod', '#daa520'],
    ['dark green', '#006400'],
    ['dark blue', '#00008b'],
    ['dark cyan', '#008b8b'],
    ['dark magenta', '#8b008b'],
    ['dark red', '#8b0000'],
    ['dark violet', '#9400d3'],
    ['dark grey', '#a9a9a9'],
    ['light green', '#90ee90'],
    ['light blue', '#add8e6'],
    ['light cyan', '#e0ffff'],
    ['light magenta', '#ee82ee'],
    ['light red', '#ffb6c1'],
    ['light violet', '#d3d3d3'],
    ['light grey', '#d3d3d3'],
    ['alice blue', '#f0f8ff'],
    ['antique white', '#faebd7'],
    ['aquamarine', '#7fffd4'],
]);


