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
import { runInThisContext } from "vm";
import { propTypes } from "react-bootstrap/esm/Image";

export class CharacterTabs extends React.Component<CharacterState> {
  constructor(props: any) {
    super(props);
  }

  state = {
    actions: this.props.actions,
    spells: this.props.spells,
    skills: this.props.skills,
    equipment: this.props.equipment,
    currentModifiers: this.props.currentModifiers,
  };

  //Update the props when the state changes
  componentDidUpdate(prevProps: CharacterState) {
    // if (prevProps !== this.props) {
    //   this.setState({
    //     actions: this.props.actions,
    //     spells: this.props.spells,
    //     skills: this.props.skills,
    //     equipment: this.props.equipment,
    //   });
    // }
  }

  //UpdateEquipment
  updateEquipment = (equipment: Equipment) => {
    this.setState({ equipment: equipment });
    if (equipment.modifiers)
      this.setState({ currentModifiers: equipment.modifiers });
    this.props.dispatchModifiers?.(equipment.modifiers);
  };

  //Apply modifiers to the character
  // dispatchModifiers = () => {
  //   let modifiers = this.props.currentModifiers;
  //   if (modifiers) {
  //     this.props.dispatchModifiers(modifiers);
  //   }
  // };

  applyModifier = (item: Item) => {
    let modifier: any = item.modifier;
    let newMods: any = this.props.currentModifiers ?? [];
    modifier.item = item.name;

    if (item.equipped && !newMods.includes(modifier)) {
      console.log("Applied", modifier);
      newMods.push(modifier);
    } else if (!item.equipped && newMods.includes(modifier)) {
      newMods.forEach((mod: any, index: number) => {
        console.log("Removed?", modifier);
        if (mod === modifier) newMods.splice(index, 1);
      });
    }
    this.setState({ currentModifiers: newMods });
    this.props.dispatchModifiers?.(newMods);
  };

  componentDidMount(): void {
    this.state.equipment.items.forEach((item: Item) => {
      console.log(item);
      if (item.equipped) this.applyModifier(item);
    });
  }

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
            <TabPanel>
              <CharacterEquipment
                {...this.state.equipment}
                updateEquipment={this.updateEquipment}
              />
            </TabPanel>
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




export default CharacterTabs;
