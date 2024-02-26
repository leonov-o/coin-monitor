import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Selector} from "../../../shared/";
import {LoopIcon} from "@radix-ui/react-icons";

export const Converter = () => {
    const allCoins = useSelector(state => state.coins.allCoins);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState({
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc"
    });
    const [toCurrency, setToCurrency] = useState({
        id: "tether",
        name: "Tether",
        symbol: "usdt"
    });
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        handleSelect("from", fromCurrency);
        handleSelect("to", toCurrency);
    }, [])

    useEffect(() => {
        convertCurrency();
    }, [amount, fromCurrency, toCurrency]);

    async function fetchPrice(id, vs_currency = "usd") {
        const result = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs_currency}&precision=2`);
        const data = await result.json();
        return data[id][vs_currency];
    }

    const handleSelect = async (field, item) => {
        const price = await fetchPrice(item.id);
        if (field === "from") {
            setFromCurrency({...item, price});
        } else {
            setToCurrency({...item, price});
        }
    }

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    const handleInput = (value) => {
        setAmount(value);
    }

    const convertCurrency = () => {
        setConvertedAmount(amount * fromCurrency.price / toCurrency.price);
    };


    return (
        <div className="flex flex-col items-center">
            <div
                className="flex h-12 w-1/3 items-center rounded-md bg-gray-200 pr-4 space-x-4 dark:bg-opacity-85 dark:bg-black dark:text-white">
                <div className="flex border-r-2 border-gray-300">
                    <Selector className="h-12" background="bg-gray-200 dark:bg-black dark:bg-opacity-85"
                              items={allCoins} selected={fromCurrency}
                              onChange={(item) => handleSelect("from", item)}/>
                </div>
                <div className="flex-1">
                    <input
                        className="h-12 w-full bg-gray-200 text-right text-2xl outline-0 dark:bg-opacity-85 dark:bg-black"
                        type="number" min="0" value={amount}
                        onChange={(e) => handleInput(e.target.value)}/>
                </div>
            </div>

            <button
                className="-mt-3 -mb-3 flex h-10 w-10 rotate-90 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 dark:bg-opacity-85 dark:border-purple-500 dark:bg-black dark:text-white"
                onClick={handleSwap}>
                <LoopIcon/>
            </button>

            <div
                className="flex h-12 w-1/3 items-center rounded-md bg-gray-200 pr-4 space-x-4 dark:bg-opacity-85 dark:bg-black dark:text-white">
                <div className="flex border-r-2 border-gray-300">
                    <Selector className="h-12" background="bg-gray-200 dark:bg-black dark:bg-opacity-85"
                              items={allCoins} selected={toCurrency}
                              onChange={(item) => handleSelect("to", item)}/>
                </div>
                <div className="flex-1">
                    <input
                        className="h-12 w-full bg-gray-200 text-right text-2xl outline-0 dark:bg-opacity-85 dark:bg-black"
                        type="number" min="0" value={convertedAmount} readOnly={true}/>
                </div>
            </div>
        </div>
    );
};
