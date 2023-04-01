import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import './CharacterTabs.css';
import "../Styles.css";
import Character, { CharacterState } from "../pages/Character";
import CharacterActionInterface from "./ActionCard";
import CharacterAction from "./ActionCard";
import { Item, Equipment } from "../Structs";
import CharacterSpellInterface, { CharacterSpell } from "./SpellCard";
import SkillsList from "../components/SkillsList";
import CharacterEquipment from "./Equipment";

export class CharacterTabs extends React.Component<CharacterState> {
  constructor(props: CharacterState) {
    super(props);
  }

  state = {
    actions: this.props.actions,
    spells: this.props.spells,
    skills: this.props.skills,
    equipment: this.props.equipment,
  };

  render(): JSX.Element {
    return (
      <div className="tab-container">
        <SkillsList {...this.state.skills} />
        <div style={{ margin: "20px", width: "100%" }}>
          <Tabs>
            <TabList>
              <Tab>Actions</Tab>
              <Tab>Spells</Tab>
              <Tab>Equipment</Tab>
              <Tab>Inventory</Tab>
            </TabList>
            <TabPanel>{showActions(this.state.actions)}</TabPanel>
            <TabPanel>{showSpells(this.state.spells)}</TabPanel>
            <TabPanel>{showEquipment(this.state.equipment)}</TabPanel>
            <TabPanel>
              <h2>Inventory content</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

function showActions(actions: any) {
  return actions.map((action: CharacterActionInterface) => {
    return <CharacterAction {...action} />;
  });
}

function showSpells(spells: any) {
  return spells.map((spell: CharacterSpellInterface) => {
    return <CharacterSpell {...spell} />;
  });
}

function showEquipment(equipment: Equipment) {
  return <CharacterEquipment {...equipment} />;
}


export default CharacterTabs;
