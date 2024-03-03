import React, {useState} from 'react';
import {ToggleTheme} from "../../../../features/";
import {NavLink} from "react-router-dom";
import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex h-12 items-center justify-between bg-gradient-to-br from-purple-500 to-blue-300 px-5 md:px-12 text-white from-20% dark:bg-gradient-to-br dark:from-purple-900 dark:to-blue-900">
            <div className="flex justify-between">
                <NavLink to="/" className="flex-none cursor-pointer text-lg font-medium">Coin Monitor</NavLink>

                <div className="ml-20 hidden cursor-pointer select-none justify-start space-x-5 md:flex">
                    {navItems.map((item, i) => (
                        <NavLink to={item.path} key={i} className="from-blue-300 via-cyan-400 to-blue-300 transition-all duration-500 from-40% via-60% hover:animate-text hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent dark:via-purple-500-400 dark:from-red-500 dark:to-orange-300">
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">
                <div>
                    <ToggleTheme/>
                </div>
                <div className="md:hidden">
                    <HamburgerMenuIcon onClick={() => setIsMenuOpen(true)}  width={20} height={20}/>
                    <div className={`fixed w-64 h-full top-0 bg-black bg-opacity-85 p-5 z-10 space-y-4 text-center cursor-pointer select-none transform transition-all ease-in-out duration-500 ${isMenuOpen ? "right-0" : "-right-full "}`}>
                        <Cross1Icon className="absolute top-3 right-5" onClick={() => setIsMenuOpen(false)}  width={20} height={20}/>
                        {navItems.map((item, i) => (
                            <NavLink onClick={() => setIsMenuOpen(false)} to={item.path} key={i} className="text-lg block from-blue-300 via-cyan-400 to-blue-300 transition-all duration-500 from-40% via-60% hover:animate-text hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent dark:via-purple-500-400 dark:from-red-500 dark:to-orange-300">
                                {item.text}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

