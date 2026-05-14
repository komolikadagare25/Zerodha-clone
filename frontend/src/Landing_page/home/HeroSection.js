import React from 'react'

function HeroSection() {
    return (  
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero' className='mb-5' />    
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform for investing in stocks, bonds, and more</p>
                <button className='btn btn-primary fs-5 mb-5' style={{width : "20%", margin: "0 auto"}}>Sign up Now</button>
            </div>

        </div>
    );
}

export default HeroSection;