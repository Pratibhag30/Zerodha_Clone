import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
           
            <div className='row'>   
            <h4 style={{fontWeight:"400" , marginLeft:"15%" , marginBottom:"4rem"}}>To create a ticket, select a relevant topic</h4>
            <div className='col-2'></div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-circle-plus"></i>Account opening</h5>
                    <p>Resident individual</p>
                    <p>Minor</p>
                    <p>Non Resident Indian (NRI)</p>
                    <p>Company, Partnership, HUF and LLP</p>
                    <p>Glossary</p>
                </div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-circle-user"></i> Your Zerodha Account</h5>
                    <p>Your Profile</p>
                    <p>Account modification</p>
                    <p>Client Master Report (CMR) and Depository Participant (DP)</p>
                    <p>Nomination</p>
                    <p>Transfer and conversion of securities</p>
                </div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-grip-lines-vertical"></i> Kite</h5>
                    <p>IPO</p>
                    <p>Trading FAQs</p>                    
                    <p>Margin Trading Facility (MTF) and Margins</p>
                    <p>Charts and orders</p>
                    <p>Alerts and Nudges</p>
                    <p>General</p>

                </div>
            </div>
            <div className='row mt-5'>   
            <div className='col-2'></div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-folder-closed"></i> Funds</h5>
                    <p>Add Money</p>
                    <p>Withdraw Money</p>
                    <p>Add bank Account</p>
                    <p>eMandetes</p>
                </div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-circle-notch"></i> Console</h5>
                    <p>Portfolio</p>
                    <p>Corporate actions</p>
                    <p>Funds statement</p>
                    <p>Reports</p>
                    <p>Profile</p>
                    <p>Segments</p>
                </div>
                <div className='col-3 para'>
                    <h5 style={{fontWeight:"400"}}><i class="fa-solid fa-coins"></i> Coin</h5>
                    <p>Understanding mutual funds and Coin</p>
                    <p>Coin app</p>
                    <p>Coin web</p>
                    <p>Transactions and reports</p>
                    <p>National Pension Scheme (NPS)</p>

                </div>
            </div>
        </div>
     );
}

export default CreateTicket;