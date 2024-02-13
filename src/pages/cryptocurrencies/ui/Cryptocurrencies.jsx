import React from 'react';
import {CoinsTable, PageDescription} from "../../../widgets";
import {Search} from "../../../widgets/search/index.js";


export const Cryptocurrencies = () => {
    return (
        <div>
            <PageDescription title="Cryptocurrencies" description="Check most popular cryptocurrencies prices"/>
            <Search/>
            <CoinsTable/>
        </div>
    );
};
