import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row mt-5 p-5 border-bottom text-center">
                <h1>Pricing</h1>
                <p className="mt-2 text-muted">Free Equity investments and flat ₹20 traday and F&O trades</p>
            </div>
            <div className="row mt-5 p-5">
                <div className="col-4 text-center">
                    <img src="../media/images/pricing0.svg" alt="Pricing" className="img-fluid" style={{ width: '60%' }} />
                    <h1 className="fs-3">Free Equity Delivery</h1>
                    <p className='mt-3'>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className="col-4 text-center">
                    <img src="../media/images/intradayTrades.svg" alt="Pricing" className="img-fluid" style={{ width: '60%' }} />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                </div>
                 <div className="col-4 text-center">
                    <img src="../media/images/pricing0.svg" alt="Pricing" className="img-fluid" style={{ width: '60%' }} />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className='mt-3'>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;