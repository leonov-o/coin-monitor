import React from 'react';
import {ToggleTheme} from "../../../../features/";
import {NavLink} from "react-router-dom";

const navItems = [
    {
        text: "Cryptocurrencies",
        path: "/"
    },
    {
        text: "Converter",
        path: "/converter"
    },
    {
        text: "Favourite",
        path: "/favourite"
    },

];

export const Header = () => {
    return (
        <div
            className="flex h-12 items-center justify-between bg-gradient-to-br from-purple-500 to-blue-300 px-12 text-white from-20% dark:bg-gradient-to-br dark:from-purple-900 dark:to-blue-900">
            <div className="flex justify-between">
                <NavLink to="/" className="flex-none cursor-pointer text-lg font-medium">Coin Monitor</NavLink>
                <div className="ml-20 flex cursor-pointer select-none justify-start space-x-5">
                    {
                        navItems.map((item,i) => (
                            <NavLink to={item.path} key={i} className="from-blue-300 via-cyan-400 to-blue-300 transition-all duration-500 from-40% via-60% hover:animate-text hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent dark:via-purple-500-400 dark:from-red-500 dark:to-orange-300">
                                {item.text}
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <div className="flex">
                <ToggleTheme/>
            </div>
        </div>
    );
};

