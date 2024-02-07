import React from 'react';

const navItems = ["Cryptocurrencies", "Converter", "Favourite"];

export const Header = () => {
    return (
        <div
            className="flex h-12 items-center justify-between bg-gradient-to-br from-purple-500 to-blue-300 px-12 text-white from-20%">
            <div className="flex justify-between">
                <div className="flex-none text-lg font-medium">Coin Monitor</div>
                <div className="ml-20 flex justify-start space-x-5">
                    {
                        navItems.map((item,i) => (
                            <div key={i} className="from-blue-300 via-cyan-400 to-blue-300 transition-all duration-500 from-40% via-60% hover:animate-text hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex">

            </div>
        </div>
    );
};

