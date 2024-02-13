import {router, withStore} from "./providers";
import {RouterProvider} from "react-router-dom";
import {useEffect} from "react";
import {fetchCoinsData} from "../entities/index.js";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoinsData());
    }, []);
    
    return (
        <RouterProvider router={router}/>
    )
}

export default withStore(App);
