import React from 'react';
import {Link} from "react-router-dom";
import {rounded} from "../../../../shared";

export const CoinRow = ({data}) => {
    const {
        market_cap_rank: rank,
        image,
        name,
        symbol,
        current_price: price,
        price_change_percentage_1h_in_currency: price_change_1h,
        price_change_percentage_24h_in_currency: price_change_24h,
        price_change_percentage_7d_in_currency: price_change_7d
    } = data;


    return (
        <tr className="hover:bg-blue-50 dark:hover:bg-gray-900">
            <td className="pl-3">{rank}</td>
            <Link to={"coins/" + data.id}>
                <td className="flex cursor-pointer items-center">
                    <div className="h-8 w-8">
                        <img src={image} alt="coinImage"/>
                    </div>
                    <div className="ml-4">
                        <div className="">{name}</div>
                        <div className="font-light uppercase">{symbol}</div>
                    </div>
                </td>
            </Link>
            <td>{price} $</td>
            <td className={price_change_1h < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_1h, 1)} %</td>
            <td className={price_change_24h < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_24h, 1)} %</td>
            <td className={price_change_7d < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_7d, 1)} %</td>
        </tr>
    );
};
