import React from 'react';
import {CoinsTable, PageDescription} from "../../../widgets";


export const Cryptocurrencies = () => {
    return (
        <div>
            <PageDescription title="Cryptocurrency Prices" description="The world's largest independent crypto data aggregator"/>
            <CoinsTable/>
        </div>
    );
};
