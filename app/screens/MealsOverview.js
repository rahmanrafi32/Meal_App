import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from "../data";
import MealItem from "../components/MealItem";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const MealsOverview = ({route, navigation}) => {
    const id = route.params.categoryId;
    const displayMeals = MEALS.filter(item => item.categoryIds.indexOf(id) >= 0);

    function renderMealItem(item) {
        return <MealItem item={item.item}/>
    }

    let categoryTitle = CATEGORIES.find(category => category.id === id).title;

    useLayoutEffect(() => navigation.setOptions({
        title: categoryTitle
    }), [id, navigation])

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    );
};

export default MealsOverview;
