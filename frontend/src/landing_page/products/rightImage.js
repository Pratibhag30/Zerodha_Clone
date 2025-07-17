import React from 'react';

function rightImage({ imageUrl, productName, ProductDescription, learnMore }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-3' style={{marginTop:"10%"}}>
                    <h1 className='mt-5 fs-3'>{productName}</h1>
                    <p className='text-muted' style={{ lineHeight: "1.85rem" }}>{ProductDescription}</p>
                    <a href={learnMore} style={{  textDecoration: "none" }}>learn More &nbsp;<i class="fa-solid fa-arrow-right"> </i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-4'>
                    <img src={imageUrl} style={{ height: "80%" }} />
                </div>
            </div>
        </div>
    );
}

export default rightImage;