//Character Skill List

import React from "react";
import {
  Ability,
  CharacterAbilities,
  CharacterSkills,
  Skill,
} from "../Structs";
// import "./SkillsList.css";
import "../Styles.css";

export const SkillCard = (props: Skill) => {
  let modifier: number = props.modifier.value;
  let proficiency: boolean = props.proficient.valueOf();

  modifier = Math.floor(modifier / 2 + (props.proficient ? 2 : 0));

  return (
    <div className="skill-card">
      <div className="skill-proficiency">
        <input
          type="radio"
          checked={proficiency}
          onChange={() => {
            console.log("Proficiency Changed");
          }}
        />
      </div>
      <div className="skill-value">
        <text>{modifier}</text>
      </div>
      <text className="skill-name">{props.name}</text>
    </div>
  );
};

export const SkillsList = (props: CharacterSkills) => {
  return (
    <div className="skills-list">
      <div className="skill-list-header">
        <text>Skills</text>
      </div>
      <div className="skill-list-body">
        {Object.keys(props).map((key) => {
          return (
            <div className="skill-list-item">
              <SkillCard {...props[key]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;
