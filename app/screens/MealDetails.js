import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import {MEALS} from "../data";
import MealDetail from "../components/MealDetail";
import SubtitleMeal from "../components/SubtitleMeal";
import Lists from "../components/Lists";
import IconButton from "../components/IconButton";
import {addFavorite, removeFavorite} from "../lib/redux/slices/favorites";
import colors from "../theme/colors";
// import {FavoriteContext} from "../context/favoriteContext";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: colors.white
    },
    listContainer: {
        maxWidth: "80%",
        alignSelf: "center"
    }
});

const MealDetails = ({route, navigation}) => {
    // const favoriteMealContext = useContext(FavoriteContext);
    const id = route.params.mealId;
    const favoriteMealId = useSelector(state => state.favoriteMeals.id);
    const dispatch = useDispatch();
    const {
        imageUrl,
        title,
        steps,
        duration,
        complexity,
        affordability,
        ingredients
    } = MEALS.find(meal => meal.id === id);

    const isMealFavorite = favoriteMealId.includes(id);

    function favoriteButtonPressHandler() {
        isMealFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isMealFavorite ? "star" : "staro"} color={"white"}
                                   onPress={favoriteButtonPressHandler}/>
            }
        })
    }, [navigation, favoriteButtonPressHandler])
    return (
        <ScrollView style={{marginBottom: 10}}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
            <MealDetail
                duration={duration}
                affordability={affordability}
                complexity={complexity}
                textStyle={{color: 'white'}}
            />
            <View style={styles.listContainer}>
                <SubtitleMeal>Ingredients</SubtitleMeal>
                <Lists datas={ingredients}/>
                <SubtitleMeal>Steps</SubtitleMeal>
                <Lists datas={steps}/>
            </View>
        </ScrollView>
    );
};

export default MealDetails;
