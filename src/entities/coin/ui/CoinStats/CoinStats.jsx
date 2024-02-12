import React from 'react';
import {Card} from "../../../../shared";

export const CoinStats = ({market_cap, circulating_supply, total_supply, max_supply, ath, atl}) => {

    return (
        <div className="mt-4 flex flex-wrap justify-center">
            <Card name="Market Cap" value={"$" + market_cap}/>
            <Card name="Circulating Supply" value={circulating_supply}/>
            <Card name="Total Supply" value={total_supply} />
            <Card name="Max Supply" value={max_supply?max_supply:"∞"}/>
            <Card name="All-Time High" value={"$" + ath}/>
            <Card name="All-Time Low" value={"$" + atl}/>
        </div>
    );
};
