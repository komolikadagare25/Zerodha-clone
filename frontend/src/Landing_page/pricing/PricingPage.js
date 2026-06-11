import React from 'react'
import TopNav from '../TopNav';
import Footer from '../Footer';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return ( 
        <>
        
        <Hero></Hero>
        <OpenAccount></OpenAccount>
        <Brokerage></Brokerage>
        
        </>
     );
}

export default PricingPage;