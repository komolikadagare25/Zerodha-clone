import React from 'react'

function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5 p-5'>
                    <h1 className='fs-4 mb-4'>Unbeatable pricing</h1>
                    <p className='fs-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mt-5' style={{ textDecoration: 'none' }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 '>
                    <div className='row p-5'>
                        <div className='col-4 '>
                            <img src='media/images/pricingEquity.svg' style={{ width: '50%' }}></img>
                            <div className='fs-10'>Free account opening</div>
                        </div>
                        <div className='col-4 '>
                            <img src='media/images/pricingEquity.svg' style={{ width: '50%' }}></img>
                            <div className='fs-10'>Free equity delivery and direct mutual funds</div>
                        </div>
                        <div className='col-4'>
                            <img src='media/images/intradayTrades.svg' style={{ width: '50%' }}></img>
                            <div className='fs-10'>Intraday and F&O</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Pricing;