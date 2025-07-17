import React from 'react';

import Hero from './Hero'
import Brokage from './brokage';
import ChargesExplain from './charges';
import ChargesForAccount from './chargesForAccount';
import ChargesForServices from './ChargesforServices';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokage />
        <ChargesExplain/>
        <ChargesForAccount/>
        <ChargesForServices/>
        </>
     );
}

export default PricingPage;