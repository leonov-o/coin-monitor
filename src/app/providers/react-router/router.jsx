import {createBrowserRouter} from "react-router-dom";
import {CoinPage, Cryptocurrencies, LayoutPage, NotFoundPage} from "../../../pages";


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
                element: <div>Converter</div>,
            },
            {
                path: "favourite",
                element: <div>Favourite</div>
            }
        ]
    }
]);
