// TabsComponent.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tabs.css"
import Airports from '../Airports/Airports';
import Testimonials from "../Testimonials/Testimonials"
import SignupForm from "../Form/SignupForm"

const TabsComponent = () => {
  return (
    <div className="wrapper">
    <Tabs defaultIndex={2}>
      <TabList className='border-none' style={{textAlign:"center"}}>
        <Tab>Tab 1</Tab>
        <Tab>Airport Images</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <Testimonials/>
      </TabPanel>

      <TabPanel>
        <Airports/>
      </TabPanel>

      <TabPanel>
        <h2 style={{textAlign:"center"}}>Signup</h2>
        <SignupForm/>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default TabsComponent;
