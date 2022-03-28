import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';

export const CharacterTabs = (props) => {

    return (
        <div style={{margin:'14px'}}>
        <Tabs>
            <TabList>
            <Tab>Actions</Tab>
            <Tab>Spells</Tab>
            <Tab>Inventory</Tab>
            <Tab>Features</Tab>
            </TabList>

            <TabPanel>
            <h2>Actions content</h2>
            </TabPanel>
            <TabPanel>
            <h2>Spells content</h2>
            </TabPanel>
            <TabPanel>
            <h2>Inventory content</h2>
            </TabPanel>
            <TabPanel>
            <h2>Features content</h2>
            </TabPanel>
        </Tabs>
        </div>
    );
}

export default CharacterTabs;