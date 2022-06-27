import React from 'react';
import {Text, View, StyleSheet, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import MealDetail from "./MealDetail";
import colors from "../theme/colors";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: colors.white,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible'
    }
});

const MealItem = ({item: {id, title, imageUrl, duration, complexity, affordability}}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: "#ccc"}}
                       onPress={() => navigation.navigate("MealDetails", {mealId: id})}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetail duration={duration} affordability={affordability} complexity={complexity}/>
            </Pressable>
        </View>
    );
};

export default MealItem;
