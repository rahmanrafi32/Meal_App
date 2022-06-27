import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import MealItem from "./MealItem";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const MealList = ({displayMeals}) => {
    function renderMealItem(item) {
        return <MealItem item={item.item}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    );
};

export default MealList;
