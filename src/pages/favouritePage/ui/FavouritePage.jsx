import React from 'react';
import {FavouriteList, PageDescription} from "../../../widgets";

export const FavouritePage = () => {

    return (
        <div>
            <PageDescription title="Favourites" description="Keep track of your favorite coins"/>
            <FavouriteList/>
        </div>
    );
};
