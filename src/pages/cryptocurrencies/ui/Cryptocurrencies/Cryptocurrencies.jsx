import React from 'react';
import {Header} from "../../../../widgets/header/index";
import {PageDescription} from "../../../../widgets/pageDescription/index.js";
import {CoinsTable} from "../../../../widgets/coinsTable/index.js";


export const Cryptocurrencies = () => {
    return (
        <div>
            <Header/>
            <PageDescription title="Cryptocurrency Prices" description="The world's largest independent crypto data aggregator"/>
            <CoinsTable/>
        </div>
    );
};
