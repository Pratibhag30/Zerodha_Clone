import React from 'react';

function leftImage({ imageUrl, productName, ProductDescription, trydemo, learnmore, gogglePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-4'>
                    <img src={imageUrl} style={{height:"70%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h1 className='mt-2 fs-3'>{productName}</h1>
                    <p className='text-muted' style={{lineHeight:"1.85rem"}}>{ProductDescription}</p>
                    <div className='mb-4'>
                    <a href={trydemo} style={{marginRight:"5rem" ,textDecoration:"none"}}>tryDemo &nbsp;  <i class="fa-solid fa-arrow-right"> </i></a>
                    <a href={learnmore} style={{marginRight:"5rem" ,textDecoration:"none"}}>learn More &nbsp;<i class="fa-solid fa-arrow-right"> </i></a>
                    </div>
                    <div>
                    <a href={gogglePlay} style={{textDecoration:"none"}}> <img src="media/images/googlePlayBadge.svg" /> </a>
                    <a href={appStore} style={{textDecoration:"none"}}> <img src="media\images\appstoreBadge.svg" /> </a>
                    </div>   
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default leftImage;