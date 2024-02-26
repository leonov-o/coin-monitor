import React, {useState} from 'react';

export const Selector = ({selected, items, onChange, className, background}) => {
    const [searchValue, setSearchValue] = useState('');
    const [isActive, setIsActive] = useState(false);


    const handleSelect = (item) => {
        setIsActive(!isActive);
        onChange(item)
    }

    const filteredCoins = items.filter((coin) =>
        coin.name.toLowerCase().startsWith(searchValue.toLowerCase())
    ).slice(0, 5);

    return (
        <div className={`w-36 flex justify-between items-center space-x-4 dark:text-white ${className} ${background}`}>
            <div className="relative">
                <div className="p-2">
                    {selected.name.length > 11 ? `${selected.name.slice(0, 10)}...` : selected.name}
                </div>
                {isActive && (
                    <div className={`absolute z-10 w-36 ${className} ${background}`}>
                        <input className="w-full bg-gray-100 p-1 text-black outline-0" placeholder="Search..." type="text"
                               onChange={(e) => setSearchValue(e.target.value)}/>
                        {filteredCoins.map((item, index) => (
                            <div key={index} id={item.name} onClick={() => handleSelect(item)}
                                 className={`p-1 border-t-2 border-gray-300 dark:border-purple-300 ${background} cursor-pointer w-full`}>
                                {item.name}
                            </div>

                        ))}
                    </div>
                )}
            </div>
            <div className="w-6 cursor-pointer select-none" onClick={() => setIsActive(!isActive)}>
                {isActive ? "▴" : "▾"}
            </div>
        </div>
    );
};
