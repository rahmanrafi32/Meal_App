import React from 'react';
import {FlatList} from 'react-native';

import {CATEGORIES} from "../data";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = ({navigation}) => {
    function renderCategoryItem(item) {
        function pressHandler() {
            navigation.navigate("MealOverview", {
                categoryId: item.item.id
            })
        }

        return <CategoryGridTile title={item.item.title} color={item.item.color} onPress={pressHandler}/>
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default Categories;
