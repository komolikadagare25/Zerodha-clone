import React from 'react'

function Hero() {
    return ( 
        <div className='hero container text-center border-bottom pt-3' style={{paddingBottom: '100px'}}>
           <h1 className='fs-2 text-muted mt-5' style={{lineHeight: '50px'}}>Zerodha Products</h1>
           <h3 className='fs-5 text-muted mt-2'>Sleek, modern, and intuitive trading platforms</h3>
           <p className='mt-4'>Check out our <a href="#" style={{color: 'blue'}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
    
     );
}

export default Hero;