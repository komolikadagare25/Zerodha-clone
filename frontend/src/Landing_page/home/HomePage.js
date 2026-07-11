import React from 'react'
import HeroSection from './HeroSection';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import TopNav from '../TopNav';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
            
            <HeroSection></HeroSection>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
            
        </>
     );
}

export default HomePage;