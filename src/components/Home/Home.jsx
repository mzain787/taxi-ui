import React from 'react';
import Header from "../Header/Header";
import Hero from '../Home/Hero/Hero';
import Options from './Options/Options';
import Bsteps from './bookingSteps/Bsteps';
import Brand from './Brand/Brand';
import Faq from './Faq/Faq';
import Airports from './Airports/Airports';
import TabsComponent from './Tabs/TabsComponent';
import Testimonials from './Testimonials/Testimonials';
function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Options/>
    <Bsteps/>
   <Brand/>
   <Testimonials/>
   <Faq/>
   <Airports/>
   <TabsComponent/>
    </>
  )
}

export default Home