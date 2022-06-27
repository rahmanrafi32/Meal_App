import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import {FavoriteContext} from "../store/context/favoriteContext";
import {MEALS} from "../data";

const styles = StyleSheet.create({});

const Favorites = () => {
    const favoriteMealContext = useContext(FavoriteContext);
    const meals = MEALS.filter(meal => favoriteMealContext.id.includes(meal.id));

    return meals.length === 0
        ? <View>
            <Text>Currently You Don't Have Any Favorite Meal</Text>
        </View>
        : <MealList displayMeals={meals}/>
};

export default Favorites;
