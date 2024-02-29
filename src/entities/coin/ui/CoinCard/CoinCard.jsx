import React from 'react';
import {PercentChange} from "../../../../shared";
import {Link} from "react-router-dom";

export const CoinCard = ({data}) => {
    return (
        <div className="mr-5 mb-4 flex h-16 w-72 items-center justify-between rounded-lg bg-gray-100 p-3 text-lg min-w-52 dark:bg-gray-900 dark:text-white">
            <div className="h-12 w-12">
                <img src={data.image} alt="coinImage"/>
            </div>

            <div className="ml-3 grow">
                <Link to={"/coins/" + data.id}>
                    <div className="">{data.name.length > 11 ? `${data.name.slice(0, 10)}...` : data.name}</div>
                    <div className="font-thin uppercase">{data.symbol}</div>
                </Link>
            </div>


            <div className="text-right">
                <div className="">
                    <PercentChange value={data.price_change_percentage_24h} precision={2}/>
                </div>
                <div className="">${data.current_price}</div>
            </div>
        </div>
    );
};
