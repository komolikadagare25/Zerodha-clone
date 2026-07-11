import React from 'react'
function Awards() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row '>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='awards' className='mb-5' />
                </div>
                <div className='col-6'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <ul className='mt-5'>
                        <div className='row'>
                            <div className='col-6'>
                                <li><p>Futures & Options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </div>
                            <div className='col-6'>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds & government securities</p></li>
                            </div>
                        </div>
                    </ul>
                    <img src='media/images/pressLogos.png' alt='press logos' className='mt-5' style={{width : "90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;