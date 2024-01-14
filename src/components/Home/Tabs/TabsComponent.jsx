// TabsComponent.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tabs.css"
import Airports from '../Airports/Airports';

const TabsComponent = () => {
  return (
    <div className="wrapper">
    <Tabs defaultIndex={0}>
      <TabList className='border-none'>
        <Tab>Tab 1</Tab>
        <Tab>Airport Images</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Content for Tab 1</h2>
        <p>This is the content of the first tab.</p>
      </TabPanel>

      <TabPanel>
        <Airports/>
      </TabPanel>

      <TabPanel>
        <h2>Content for Tab 3</h2>
        <p>This is the content of the third tab.</p>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default TabsComponent;
