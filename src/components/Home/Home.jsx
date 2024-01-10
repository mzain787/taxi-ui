import React from 'react';
import Header from "../Header/Header";
import Hero from '../Home/Hero/Hero';
import Options from './Options/Options';
import Bsteps from './bookingSteps/Bsteps';
import Brand from './Brand/Brand';
import Faq from './Faq/Faq';
function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Options/>
    <Bsteps/>
   <Brand/>
   <Faq/>
    </>
  )
}

export default Home