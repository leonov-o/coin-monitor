import {coinsDataFetching, coinsDataFetchingError, coinsDataFetchingSuccess} from "./slice.js";


export const fetchCoinsData = () => async (dispatch) => {
    try {
        dispatch(coinsDataFetching());
        const result = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
        const json = await result.json();
        dispatch(coinsDataFetchingSuccess(json));
    }catch (e) {
        dispatch(coinsDataFetchingError(e.message))
    }
}
