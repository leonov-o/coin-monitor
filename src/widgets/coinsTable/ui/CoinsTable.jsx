import React, {useEffect, useState} from 'react';
import {CoinRow, coinsDataSort} from "../../../entities";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../../shared/";

export const CoinsTable = () => {
    const {coinsData, isLoading, error} = useSelector(state => state.coins);
    const [sortBy, setSortBy] = useState("market_cap_rank");
    const [desc, setDesc] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(coinsDataSort({sortBy, desc}));
    }, [sortBy, desc]);

    const setSort = (id) => {
        setDesc(!desc);
        if (sortBy !== id) {
            setDesc(false)
        }
        setSortBy(id);
    }

    const handleSort = (id) => {
        if (sortBy === id) {
            if (desc) {
                return "▾";
            }
            return "▴";
        }
    }


    return (
        <div className="flex justify-center">
            <table
                className="w-3/4 table-auto bg-gray-50 bg-opacity-90 shadow-2xl backdrop-blur-sm  dark:bg-opacity-85 dark:bg-black dark:text-white">
                <thead>
                <tr onClick={(e) => setSort(e.target.id)}
                    className="cursor-pointer select-none border-b-2 bg-gray-100 text-left dark:bg-black">
                    <th id="market_cap_rank" className="py-2 pl-3"># {handleSort("market_cap_rank")}</th>
                    <th id="name" className="py-2">Coin {handleSort("name")}</th>
                    <th id="current_price" className="py-2">Price {handleSort("current_price")}</th>
                    <th id="price_change_percentage_1h_in_currency"
                        className="py-2 hidden lg:table-cell">1h {handleSort("price_change_percentage_1h_in_currency")}</th>
                    <th id="price_change_percentage_24h_in_currency"
                        className="py-2 hidden lg:table-cell">24h {handleSort("price_change_percentage_24h_in_currency")}</th>
                    <th id="price_change_percentage_7d_in_currency"
                        className="py-2 hidden lg:table-cell">7d {handleSort("price_change_percentage_7d_in_currency")}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    coinsData.map(coin => <CoinRow key={coin.id} data={coin}/>)
                }
                {
                    isLoading
                        ? (
                            <tr className="h-96">
                                <td colSpan={6}>
                                    <Loader className="mx-auto my-0 h-32 w-32"/>
                                </td>
                            </tr>
                        )
                        : null
                }
                {
                    error
                        ? (
                            <tr className="h-96">
                                <td colSpan={6}>
                                    <div className="text-center text-2xl">{error}</div>
                                </td>
                            </tr>
                        )
                        : null
                }
                </tbody>
            </table>

        </div>
    );
};
