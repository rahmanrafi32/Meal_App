import {configureStore} from "@reduxjs/toolkit";
import favorites from "./slices/favorites";

export const store = configureStore({
    reducer: {
        favoriteMeals: favorites
    }
})