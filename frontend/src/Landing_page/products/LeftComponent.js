import React from 'react'

function LeftComponent({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container p-5'>
            <div className='row'> 
                <div className='col-1'></div>
                <div className='col-4 text-center'>
                    <img src={imageURL} alt={productName} className='img-fluid'/>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h1 className='fs-3 text-muted'>{productName}</h1>
                    <p className='text-muted mt-4'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} className='' style={{color : 'blue'}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} className="m-5" style={{color : 'blue'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="my-5">
                        <a href={googlePlay} ><img src="../media/images/googlePlayBadge.svg" alt="Google Play" className='img-fluid' style={{ maxHeight: '50px' }} /></a>
                        <a href={appStore} className="m-3"><img src="../media/images/appStoreBadge.svg" alt="App Store" className='img-fluid' style={{ maxHeight: '50px' }} /></a>
                    </div>

                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default LeftComponent;