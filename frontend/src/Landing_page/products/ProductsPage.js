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
          
           <Hero></Hero>
           <LeftComponent></LeftComponent>
           <RightComponent></RightComponent>
           <Universe></Universe>
           
        </>
     );
}

export default ProductPage;