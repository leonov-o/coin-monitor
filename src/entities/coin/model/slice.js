import {createSlice} from "@reduxjs/toolkit";


const coinsSlice = createSlice({
    name: "coins",
    initialState: {
        allCoins: [],
        coinsData: [],
        isLoading: true,
        error: ''
    },
    reducers: {
        allCoinsFetching(state) {
            state.isLoading = true;
        },
        allCoinsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.allCoins = action.payload;
        },
        allCoinsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        coinsDataFetching(state) {
            state.isLoading = true;
        },
        coinsDataFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.coinsData = action.payload;
        },
        coinsDataFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        coinsDataSort(state, action) {
            const {sortBy, desc} = action.payload;
            state.coinsData = state.coinsData.sort((a, b) => {
                const aValue = sortBy === "name" ? a[sortBy].toLowerCase() : a[sortBy];
                const bValue = sortBy === "name" ? b[sortBy].toLowerCase() : b[sortBy];
                if (desc) {
                    return aValue < bValue ? 1 : -1;
                } else {
                    return aValue > bValue ? 1 : -1;
                }
            });
        }

    }
});
export default coinsSlice.reducer;
export const {
    allCoinsFetching,
    allCoinsFetchingSuccess,
    allCoinsFetchingError,
    coinsDataFetching,
    coinsDataFetchingSuccess,
    coinsDataFetchingError,
    coinsDataSort
} = coinsSlice.actions;
