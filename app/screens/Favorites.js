import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import {FavoriteContext} from "../context/favoriteContext";
import {MEALS} from "../data";
import {useDispatch, useSelector} from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center"
    }
});

const Favorites = () => {
    // const favoriteMealContext = useContext(FavoriteContext);
    const favoriteMealId = useSelector(state => state.favoriteMeals.id);
    const meals = MEALS.filter(meal => favoriteMealId.includes(meal.id));

    return meals.length === 0
        ? <View style={styles.container}>
            <Text style={styles.title}>Currently You Don't Have Any Favorite Meal</Text>
        </View>
        : <MealList displayMeals={meals}/>
};

export default Favorites;
