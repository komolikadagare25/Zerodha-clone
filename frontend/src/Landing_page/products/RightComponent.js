import React from 'react'

function RightComponent({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
               <div className='col-4'>
                    <h1 className='fs-3 text-muted'>{productName}</h1>
                    <p className='text-muted mt-4'>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{color : 'blue'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className='col-4 text-center'>
                    <img src={imageURL} alt={productName} className='img-fluid'/>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default RightComponent;