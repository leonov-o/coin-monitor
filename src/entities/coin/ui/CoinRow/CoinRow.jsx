import React from 'react';
import {Link} from "react-router-dom";
import {rounded} from "../../../../shared";
import {ToggleFavourite} from "../../../../features";

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

            <td className="">
                <Link to={"coins/" + data.id}>
                    <div className="flex cursor-pointer items-center">
                        <div className="h-8 w-8 p-0.5">
                            <img src={image} alt="coinImage"/>
                        </div>
                        <div className="ml-4">
                            <div className="">{name}</div>
                            <div className="font-light uppercase">{symbol}</div>
                        </div>
                    </div>
                </Link>
            </td>

            <td>{price} $</td>
            <td className={`hidden lg:table-cell ${price_change_1h < 0 ? "text-red-600" : "text-green-600"}`}>{rounded(price_change_1h, 1)} %</td>
            <td className={`hidden lg:table-cell ${price_change_24h < 0 ? "text-red-600" : "text-green-600"}`}>{rounded(price_change_24h, 1)} %</td>
            <td className={`hidden lg:table-cell ${price_change_7d < 0 ? "text-red-600" : "text-green-600"}`}>{rounded(price_change_7d, 1)} %</td>
            <td className="pr-3"><ToggleFavourite id={data.id}/></td>
        </tr>
    );
};
