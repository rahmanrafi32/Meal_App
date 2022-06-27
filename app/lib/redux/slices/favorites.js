import {createSlice} from "@reduxjs/toolkit";

const favorites = createSlice({
    name: "favorites",
    initialState: {
        id: [],
    },
    reducers: {
        addFavorite: (state, {payload}) => {
            state.id.push(payload);
        },
        removeFavorite: (state, {payload}) => {
            state.id.splice(state.id.indexOf(payload), 1)
        }
    }
})

export const {addFavorite, removeFavorite} = favorites.actions;
export default favorites.reducer;
