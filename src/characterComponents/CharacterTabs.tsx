import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './CharacterTabs.css';
import Character, { CharacterState } from '../pages/Character';
import CharacterActionInterface from "./ActionCard";
import CharacterAction from "./ActionCard";
import { Item } from "../Structs";
import CharacterSpellInterface, { CharacterSpell } from "./SpellCard";

export class CharacterTabs extends React.Component<CharacterState> {

    constructor(props: CharacterState) {
        super(props);
    }

    state = {
        actions: this.props.actions,
        spells: this.props.spells,
    }

    render(): JSX.Element {
        return (
            <div style={{margin: '20px'}}>
                <Tabs>
                    <TabList>
                        <Tab>Actions</Tab>
                        <Tab>Spells</Tab>
                        <Tab>Inventory</Tab>
                        <Tab>Equipment</Tab>
                    </TabList>

                    <TabPanel>
                        {showActions(this.state.actions)}
                    </TabPanel>
                    <TabPanel>
                        <h2>Spells content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Inventory content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Equipment content</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

function showActions(actions: any) {
    return actions.map((action: CharacterActionInterface) => {
        return <CharacterAction {...action}/>
    })
}

function showSpells(spells:any){
    return spells.map((spell: CharacterSpellInterface) => {
       // return <CharacterSpell {... spell}/>
    })
}


export default CharacterTabs;
