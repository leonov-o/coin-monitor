import React, {useEffect, useState} from 'react';
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {applyTheme} from "../lib";

export const ToggleTheme = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(applyTheme() ? 'dark' : 'light');
    }, []);
    const changeTheme = () => {
        document.documentElement.classList.toggle('dark');
        const isDarkMode = document.documentElement.classList.contains('dark');
        localStorage.theme = isDarkMode ? 'dark' : 'light';
        setTheme(isDarkMode ? 'dark' : 'light');
    }
    return (
        <div>
            {
                theme === "dark"
                    ? <SunIcon onClick={changeTheme} width="20" height="20"/>
                    : <MoonIcon onClick={changeTheme} width="20" height="20"/>
            }
        </div>
    );
};
