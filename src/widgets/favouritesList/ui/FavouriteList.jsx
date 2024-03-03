import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {CoinCard} from "../../../entities";
import {Loader} from "../../../shared";

export const FavouriteList = () => {
    const {favourites} = useSelector(state => state.coins);
    const [coinsData, setCoinsData] = useState([]);
    console.log(coinsData);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${favourites.join(",")}%2C%20tether&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=2`)
            .then(data => data.json())
            .then(data => setCoinsData(data));
    }, [])


    return (
        <div className="mx-auto w-3/4 mb-24 flex flex-wrap justify-center bg-gray-50 bg-opacity-80 p-10 dark:bg-black dark:bg-opacity-80">
            {
                coinsData && coinsData.length === 0
                ? <Loader className="mx-auto"/>
                : favourites.map(id => <CoinCard key={id} data={coinsData.find(coin => coin.id === id)} />)
            }
        </div>
    );
};
