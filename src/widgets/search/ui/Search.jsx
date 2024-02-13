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
    ).slice(0, 10);

    return (
        <div className="mb-8">
            <div className="flex justify-center">
                <input
                    className="rounded rounded-b-none p-2 w-1/3 focus:outline-none"
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
            </div>

            {searchValue.length !== 0 && isActive && (
                <div className="bg-white w-1/3 absolute left-1/2 transform -translate-x-1/2 z-10">
                    {filteredCoins.map((coin) => (
                        <div key={coin.id} className="p-2 hover:bg-gray-100 cursor-pointer rounded border-b-2">
                            <Link to={`/coins/${coin.id}`}>{coin.name}</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
