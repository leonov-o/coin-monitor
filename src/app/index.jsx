import {router, withStore} from "./providers";
import {RouterProvider} from "react-router-dom";
import {useEffect} from "react";
import {addFavourite, fetchAllCoins, fetchCoinsData} from "../entities/index.js";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoinsData());
        dispatch(fetchAllCoins());
        if (localStorage.favourites && localStorage.favourites.length > 0) {
            dispatch(addFavourite(localStorage.favourites.split(",")));
        }
    }, []);

    return (
        <RouterProvider router={router}/>
    )
}

export default withStore(App);
