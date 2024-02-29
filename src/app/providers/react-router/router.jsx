import {createBrowserRouter} from "react-router-dom";
import {CoinPage, ConverterPage, Cryptocurrencies, FavouritePage, LayoutPage, NotFoundPage} from "../../../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <Cryptocurrencies/>
            },
            {
                path: "/coins/:id",
                element: <CoinPage/>
            },
            {
                path: "/converter",
                element: <ConverterPage/>,
            },
            {
                path: "favourite",
                element: <FavouritePage/>
            }
        ]
    }
]);
