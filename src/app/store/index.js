import {combineReducers, configureStore} from "@reduxjs/toolkit";
import coinsReducer from "../../entities/coin/model/slice";

const rootReducer = combineReducers({
    coins: coinsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
