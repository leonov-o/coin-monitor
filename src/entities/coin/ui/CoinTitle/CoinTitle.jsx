import React from 'react';
import {Card, rounded} from "../../../../shared";
import {ToggleFavourite} from "../../../../features/";

export const CoinTitle = ({id, name, symbol, rank, price, price_change, high24, low24, image}) => {
    return (
        <div
            className="flex items-center justify-between rounded-2xl bg-white bg-opacity-90 px-3 sm:px-10 py-4 shadow-lg dark:bg-black dark:bg-opacity-80">
            <div className="flex items-center">
                <div className="mr-6">
                    <ToggleFavourite id={id}/>
                </div>
                <div className="h-8 w-8 lg:h-12 lg:w-12">
                    <img src={image} alt="coinImage"/>
                </div>
                <div className="ml-3">
                    <div className="flex items-center">
                        <div className="text-xl lg:text-2xl font-medium">{name}</div>
                        <div className="ml-3 h-6 rounded bg-gray-200 px-2 text-center dark:bg-gray-800">#{rank}</div>
                    </div>
                    <div className="uppercase">{symbol}</div>
                    <div className="lg:hidden">
                        <div className="lg:ml-5 text-2xl lg:text-4xl font-light">${price}</div>
                        <div
                            className={"lg:ml-3 text-lg lg:text-xl font-light " + (price_change < 0 ? "text-red-600" : "text-green-600")}>{price_change < 0 ? "▾" : "▴"}{rounded(price_change, 1)}</div>
                    </div>
                </div>
            </div>
            <div className="ml-2 md:ml-10 xl:flex lg:grow items-center">
                <Card className="w-fit text-green-600" name="High 24h" value={"$" + high24}/>
                <Card className="w-fit text-red-600" name="Low 24h" value={"$" + low24}/>
            </div>
            <div className="hidden lg:block">
                <div className="ml-5 text-4xl font-light">${price}</div>
                <div
                    className={"ml-3 text-xl font-light " + (price_change < 0 ? "text-red-600" : "text-green-600")}>{price_change < 0 ? "▾" : "▴"}{rounded(price_change, 1)}</div>
            </div>
        </div>
    );
};
