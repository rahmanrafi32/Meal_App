import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {MEALS} from "../data";
import MealDetail from "../components/MealDetail";
import SubtitleMeal from "../components/SubtitleMeal";
import Lists from "../components/Lists";

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
        color: 'white'
    },
    listContainer: {
        maxWidth: "80%",
        alignSelf: "center"
    }
});

const MealDetails = ({route}) => {
    const id = route.params.mealId;
    const {
        imageUrl,
        title,
        steps,
        duration,
        complexity,
        affordability,
        ingredients
    } = MEALS.find(meal => meal.id === id);
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
