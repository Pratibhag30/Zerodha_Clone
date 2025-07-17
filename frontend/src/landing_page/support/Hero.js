import React from 'react';

function Hero() {
    return ( 
        <div className='heroDiv'>
            <div className='mb-5' id="support">
                <h3 className='mt-5'>Support</h3>
                <a className="mt-5 "href="">Track tickets</a>
            </div>
            <div className='row searchDiv'>
                <div className='col-4 searchSupp'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <div>
                    <input className="inputSupp" placeholder='Eg: how do i activate F&O, why is my order getting rejected....' />
                    </div>
                   
                    <br/><a href="">Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;<br/>
                    <a href=""> Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;
                </div>
                <div className='col-4 searchSupp '>
                    <h4>Featured</h4>
                    1. <a href="">MCX Option contracts expiry - April 2025</a><br/>
                    2. <a href="">MCX Base metals contract expiry - April 2025</a>
                </div>
            </div>
        </div>
     );
}

export default Hero;
