import React from 'react';
import {Header} from "../../../../widgets/header/index";
import {PageDescription} from "../../../../widgets/pageDescription/index";
import {CoinsTable} from "../../../../widgets/coinsTable/index";


export const Cryptocurrencies = () => {
    return (
        <div>
            <Header/>
            <PageDescription title="Cryptocurrency Prices" description="The world's largest independent crypto data aggregator"/>
            <CoinsTable/>
        </div>
    );
};
