import React from 'react'

function Universe() {
    return (
        <div className="container my-5 p-5">
            <h1 className="text-center text-muted fs-3">The Zerodha Universe</h1>
            <p className="text-center my-4 fs-6 text-muted">Extend your trading and investment experience even further with our partner platforms</p>

            <div className="row text-center">
                <div className="col-4 text-center px-5">
                    <img src="../media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Our asset management venture <br />that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 text-center px-5">
                    <img src="../media/images/sensibullLogo.svg" alt="Sensibull" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Options trading platform that lets you <br />create strategies, analyze positions, and examine <br /> data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 text-center px-5">
                    <img src="../media/images/streakLogo.png" alt="Streak" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</p>
                </div>

            </div>
            <div className="row text-center pt-4">
                <div className="col-4 px-5">
                    <img src="../media/images/smallcaseLogo.png" alt="Smallcase" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Thematic investing platform  <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 px-5">
                    <img src="../media/images/dittoLogo.png" alt="Ditto" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Personalized advice on life  <br />and health insurance. No spam  <br />and no mis-selling.</p>
                </div>
                <div className="col-4 px-5">
                    <img src="../media/images/goldenpiLogo.png" alt="GoldenPi" className="img-fluid" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ fontSize: '0.8rem' }}>Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</p>
                </div>
            </div>

            <button className="btn btn-primary d-block mx-auto mt-4 fs-5 px-3">Sign up for free</button>

        </div>


    );
}

export default Universe;