import React from 'react';

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

    const rounded = (num, digits) => {
        return (Math.round((num)*100)/100).toFixed(digits);
    }

    return (
        <tr className="hover:bg-blue-50">
            <td className="pl-3">{rank}</td>
            <td className="flex items-center cursor-pointer">
                <div className="w-8 h-8">
                    <img src={image} alt="coinImage"/>
                </div>
                <div className="ml-4">
                    <div className="">{name}</div>
                    <div className="uppercase font-light">{symbol}</div>
                </div>
            </td>
            <td>{price} $</td>
            <td className={price_change_1h < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_1h, 1)} %</td>
            <td className={price_change_24h < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_24h, 1)} %</td>
            <td className={price_change_7d < 0 ? "text-red-600" : "text-green-600"}>{rounded(price_change_7d, 1)} %</td>
        </tr>
    );
};
