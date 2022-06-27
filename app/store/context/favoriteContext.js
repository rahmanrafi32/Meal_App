import {createContext, useState} from "react";

export const FavoriteContext = createContext({
    id: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    }
});

export const FavoriteContextProvider = ({children}) => {
    const [mealId, setMealId] = useState([]);

    const addFavorite = id => {
        setMealId((currentFavId) => [...currentFavId, id])
    }
    const removeFavorite = id => {
        setMealId((currentFavId) => currentFavId.filter(mealId => mealId !== id))
    }

    const value = {
        id: mealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}