import React from 'react'
import LeftComponent from './LeftComponent';
import TopNav from '../TopNav';
import Hero from './Hero';
import RightComponent from './RightComponent';
import Universe from './Universe';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
           <TopNav></TopNav>
           <Hero></Hero>
           <LeftComponent></LeftComponent>
           <RightComponent></RightComponent>
           <Universe></Universe>
           <Footer></Footer>
        </>
     );
}

export default ProductPage;