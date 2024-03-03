import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Search = () => {
    const allCoins = useSelector((state) => state.coins.allCoins);
    const [searchValue, setSearchValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        setIsActive(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => setIsActive(false), 300);
    };

    const filteredCoins = allCoins.filter((coin) =>
        coin.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    return (
        <div className="mb-8">
            <div className="flex justify-center">
                <input
                    className="w-2/3 lg:w-1/3  rounded rounded-b-none bg-gray-100 p-2 focus:outline-none"
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
            </div>

            {searchValue.length !== 0 && isActive && (
                <div
                    className="absolute left-1/2 z-10 w-2/3 lg:w-1/3 -translate-x-1/2 transform bg-white max-h-48 overflow-y-scroll">
                    {filteredCoins.map((coin) => (
                        <Link key={coin.id} to={`/coins/${coin.id}`}>
                            <div className="cursor-pointer rounded border-b-2 p-2 hover:bg-gray-100">
                                {coin.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
