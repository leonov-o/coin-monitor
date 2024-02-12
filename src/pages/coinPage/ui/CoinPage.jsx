import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CoinInfo} from "../../../widgets";


export const CoinPage = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true&community_data=true`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    if(!data) {
        return null;
    }

    return (
        <div className="px-64 py-10 dark:text-white">
            <div>
                <CoinInfo data={data}/>
            </div>
        </div>
    );
};
