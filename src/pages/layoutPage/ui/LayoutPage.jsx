import React from 'react';
import {Footer, Header} from "../../../widgets/";
import {Outlet} from "react-router-dom";

export const LayoutPage = () => {
    return (
        <div
            className="bg-[url('../src/assets/img/bg.png')] dark:bg-[url('../src/assets/img/bg-dark.png')] dark:bg-gray-950">
            <Header/>
            <div className="min-h-screen">
                <Outlet/>

            </div>
            <Footer/>
        </div>
    );
};
