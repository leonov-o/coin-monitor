import {combineReducers} from "@reduxjs/toolkit";
import coinsReducer from "../entities/coin/model/slice"
export const rootReducer = combineReducers({
    coins: coinsReducer
})
