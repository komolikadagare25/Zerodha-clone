import React from 'react'

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/images/education.svg' style={{ width: '90%' }}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <h2 className='fs-3 mb-3 mt-5'>Free and open market education</h2>

                    <div className='mb-5'>
                        <p className='text-muted fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' style={{textDecoration : 'none'}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                     <div>
                        <p className='text-muted fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' style={{textDecoration : 'none'}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>

     );
}

export default Education;