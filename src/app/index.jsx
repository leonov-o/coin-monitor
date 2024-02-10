import {Cryptocurrencies} from "../pages/cryptocurrencies/index.js";
import {useEffect} from "react";
function App() {
    return (
        <div className="bg-[url('src/assets/img/bg.png')] dark:bg-[url('src/assets/img/bg-dark.png')] dark:bg-gray-950 min-h-screen">
            <Cryptocurrencies/>
        </div>
    )
}

export default App
