// import { Component } from "react";
// import { CharacterState, CharacterProps } from "./Character";
// import CharacterSheet from "../characterComponents/CharacterSheet";

// class Character extends Component<CharacterProps, CharacterState> {
//   constructor(props: CharacterProps) {
//     super(props);
//     this.state = {
//       id: "123456",
//       name: "Lazarous Blackstar",
//       characterClass: "Roge",
//       level: 11,
//       HP: 88,
//       AC: 19,
//       XP: 0,
//       initiative: 0,
//       speed: 0,
//       actions: [
//         {
//           name: "Sneak Attack",
//           type: "Melee",
//           range: "5",
//           toHit: "1d20",
//           damage: "1d8",
//           damageType: "Piercing",
//           description:
//             "You attack a creature you can see within 5 feet of you. You make a melee weapon attack against the target. If the attack hits, you add your Charisma modifier to the attack roll. You have advantage on the attack roll if the target is invisible, or the target is behind cover and you are able to see it.",
//           attack: "1d20 + Charisma modifier",
//           advantage: true,
//           disadvantage: false,
//           critical: false,
//           criticalMultiplier: 2,
//           criticalRange: 20,
//           criticalDamage: "1d8",
//           criticalDamageType: "Piercing",
//           criticalDescription: "",
//           notes: "",
//         },
//         {
//           name: "Poisoned Knife",
//           type: "Melee",
//           range: "5",
//           toHit: "1d20",
//           damage: "1d8",
//           damageType: "Piercing",
//           description:
//             "You attack a creature you can see within 5 feet of you. You make a melee weapon attack against the target. If the attack hits, you add your Charisma modifier to the attack roll. You have advantage on the attack roll if the target is invisible, or the target is behind cover and you are able to see it.",
//           attack: "1d20 + Charisma modifier",
//           advantage: true,
//           disadvantage: false,
//           critical: false,
//           criticalMultiplier: 2,
//           criticalRange: 20,
//           criticalDamage: "1d8",
//           criticalDamageType: "Piercing",
//           criticalDescription: "",
//           notes: "",
//         },
//       ],
//       spells: [
//         {
//           name: "Fireball",
//           school: "Evocation",
//           range: "60",
//           grade: "Cantrip",
//           castingTime: "1 action",
//           components: ["V", "S", "M"],
//           duration: "Instantaneous",
//           savingThrow: {
//             stat: "INT",
//             value: 12,
//             modifier: "WIS",
//             proficient: true,
//           },
//           description:
//             "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
//           attackBonus: 5,
//           damage: {
//             type: "Fire",
//             amount: "3d6",
//           },
//           notes: "",
//         },
//       ],
//       inventory: [],
//       equipment: {
//       }
//       notes: [],

//       stats: {
//         STR: {
//           label: "STR",
//           name: "Strength",
//           value: 12,
//           modifier: 1,
//           proficient: false,
//         },
//         DEX: {
//           label: "DEX",
//           name: "Dexterity",
//           value: 13,
//           modifier: 4,
//           proficient: false,
//         },
//         CON: {
//           label: "CON",
//           name: "Constitution",
//           value: 10,
//           modifier: 4,
//           proficient: false,
//         },
//         INT: {
//           label: "INT",
//           name: "Intelligence",
//           value: 14,
//           modifier: 2,
//           proficient: false,
//         },
//         WIS: {
//           label: "WIS",
//           name: "Wisdom",
//           value: 15,
//           modifier: 5,
//           proficient: false,
//         },
//         CHA: {
//           label: "CHA",
//           name: "Charisma",
//           value: 0,
//           modifier: 1,
//           proficient: false,
//         },
//       },

//       skills: {
//         Acrobatics: {
//           name: "Acrobatics",
//           value: 0,
//           modifier: this.state.stats.DEX,
//           proficient: false,
//         },
//         AnimalHandling: {
//           name: "Animal Handling",
//           value: 0,
//           modifier: this.state.stats.WIS,
//           proficient: false,
//         },
//         Arcana: {
//           name: "Arcana",
//           value: 0,
//           modifier: this.state.stats.INT,
//           proficient: false,
//         },
//         Athletics: {
//           name: "Athletics",
//           value: 0,
//           modifier: this.state.stats.STR,
//           proficient: false,
//         },
//         Deception: {
//           name: "Deception",
//           value: 0,
//           modifier: this.state.stats.CHA,
//           proficient: false,
//         },
//         History: {
//           name: "History",
//           value: 0,
//           modifier: this.state.stats.INT,
//           proficient: false,
//         },
//         Insight: {
//           name: "Insight",
//           value: 0,
//           modifier: this.state.stats.WIS,
//           proficient: false,
//         },
//         Intimidation: {
//           name: "Intimidation",
//           value: 0,
//           modifier: this.state.stats.CHA,
//           proficient: false,
//         },
//         Investigation: {
//           name: "Investigation",
//           value: 0,
//           modifier: this.state.stats.INT,
//           proficient: false,
//         },
//         Medicine: {
//           name: "Medicine",
//           value: 0,
//           modifier: this.state.stats.WIS,
//           proficient: false,
//         },
//         Nature: {
//           name: "Nature",
//           value: 0,
//           modifier: this.state.stats.INT,
//           proficient: false,
//         },
//         Perception: {
//           name: "Perception",
//           value: 0,
//           modifier: this.state.stats.WIS,
//           proficient: false,
//         },
//         Performance: {
//           name: "Performance",
//           value: 0,
//           modifier: this.state.stats.CHA,
//           proficient: false,
//         },
//         Persuasion: {
//           name: "Persuasion",
//           value: 0,
//           modifier: this.state.stats.CHA,
//           proficient: false,
//         },
//         Religion: {
//           name: "Religion",
//           value: 0,
//           modifier: this.state.stats.INT,
//           proficient: false,
//         },
//         SleightOfHand: {
//           name: "Sleight of Hand",
//           value: 0,
//           modifier: this.state.stats.DEX,
//           proficient: false,
//         },
//         Stealth: {
//           name: "Stealth",
//           value: 0,
//           modifier: this.state.stats.DEX,
//           proficient: false,
//         },
//         Survival: {
//           name: "Survival",
//           value: 0,
//           modifier: this.state.stats.WIS,
//           proficient: false,
//         },
//       },

//       proficiencies: {
//         bonus: 0,
//         spellDC: 0,
//         spellBonus: 0,
//         other: [],
//       },

//       details: {
//         subClass: "",
//         race: "",
//         background: "",
//         alignment: "",
//         age: 0,
//         height: 0,
//         weight: 0,
//         eyes: "",
//         hair: "",
//         skin: "",
//         traits: [],
//         ideals: [],
//         bonds: [],
//         flaws: [],
//         languages: [],
//         features: [],
//         equipment: [],
//         defenses: [],
//         trackables: [],
//         currency: [],
//         personalityTraits: [],
//       },
//     };
//   }

//   //   render() {
//   //     return (
//   //       <div>
//   //         <CharacterSheet {...this.state} />
//   //       </div>
//   //     );
//   //   }
// }

// // export default Character;
