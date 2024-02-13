import React from 'react';
import {CoinDescription, CoinGraphics, CoinStats, CoinTitle} from "../../../entities";

export const CoinInfo = ({data}) => {
    const {id, name, symbol, market_cap_rank, market_data, image, description} = data;

    const {
        current_price: {usd: price},
        price_change_percentage_24h: price_change,
        high_24h: {usd: high24},
        low_24h: {usd: low24},
        market_cap: {usd: market_cap},
        circulating_supply,
        total_supply,
        max_supply,
        ath: {usd: ath},
        atl: {usd: atl}
    } = market_data;

    return (
        <div>
            <CoinTitle id={id}
                       name={name}
                       symbol={symbol}
                       rank={market_cap_rank}
                       price={price}
                       price_change={price_change}
                       high24={high24}
                       low24={low24}
                       image={image.small}/>
            <CoinStats market_cap={market_cap}
                       circulating_supply={circulating_supply}
                       total_supply={total_supply}
                       max_supply={max_supply}
                       ath={ath}
                       atl={atl}/>
            <CoinGraphics id={id}/>
            {
                description.en &&
                <CoinDescription description={description.en}/>
            }
        </div>
    );
};
