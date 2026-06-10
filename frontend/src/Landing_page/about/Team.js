import React from 'react'

function Team() {
    return ( 
        <div className='container my-3'>
            <div className='row text-center my-2'>
                <h1 className='fs-3'>People</h1>
            </div>
            <div className='row justify-content-center align-items-center' style={{lineHeight: '1.5'}}>
                <div className='col-5 p-5 text-center' >
                    <img src='media/images/nithinKamath.jpg' alt='people1' className='img-fluid' style={{borderRadius: '50%', width:'60%', height: 'auto'}}/>
                    <h4>Nithin Kamath</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className='col-5 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#" style={{color: '#0f9eea'}}>Homepage</a>  / <a href="#" style={{color: '#0f9eea'}}>TradingQnA </a>/ <a href="#" style={{color: '#0f9eea'}}>Twitter</a></p>
                </div>
            </div>
        </div>  
     );
}

export default Team;