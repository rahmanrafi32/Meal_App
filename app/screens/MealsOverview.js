import React, {useLayoutEffect} from 'react';

import {CATEGORIES, MEALS} from "../data";
import MealList from "../components/MealList";

const MealsOverview = ({route, navigation}) => {
    const id = route.params.categoryId;
    const displayMeals = MEALS.filter(item => item.categoryIds.indexOf(id) >= 0);
    let categoryTitle = CATEGORIES.find(category => category.id === id).title;

    useLayoutEffect(() => navigation.setOptions({
        title: categoryTitle
    }), [id, navigation])

    return <MealList displayMeals={displayMeals}/>
};

export default MealsOverview;
