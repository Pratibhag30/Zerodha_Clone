import React from 'react';

function ChargesExplain() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h3 className='fs-4'>Charges explained</h3>
                    <p>Securities/Commodities transaction tax</p>
                    <p className='subText'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className='subText'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <p>Transaction/Turnover Charges</p>
                    <p className='subText'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className='subText'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className='subText'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p className='subText'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className='subText'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p>NRI brokerage charges</p>
                    <ul>
                        <li className='subText'>₹100 per order for futures and options.</li>
                        <li className='subText'>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='subText'>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='subText'>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                    <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul>
                        <li className='subText'>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li className='subText'>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li className='subText'>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        
                    </ul>
                </div>
                <div className='col-4 mt-5'>
                    <p>GST</p>
                    <p className='subText'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <p>SEBI Charges</p>
                    <p className='subText'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <p>DP (Depository participant) charges</p>
                    <p className='subText'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className='subText'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className='subText'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    
                    <p>Off-market transfer charges</p>
                    <p className='subText'>₹25 per transaction.</p>
                    <p>Physical CMR request</p>
                    <p className='subText'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <p>Payment gateway charges</p>
                    <p className='subText'>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <p>Delayed Payment Charges</p>
                    <p className='subText'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                    <p>Trading using 3-in-1 account with block functionality</p>
                    <ul>
                        <li className='subText'>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                        <li className='subText'>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                </div>
            </div>
               <div style={{marginLeft:"17%"}}>
                <p className='fs-5'>Disclaimer</p>
                <p className='subText'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.<br/> Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and <br/>assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br/>brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% <br/>will be charged.</p>
                </div>
        </div>
     );
}

export default ChargesExplain;