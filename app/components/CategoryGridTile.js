import React from 'react';
import {Text, View, StyleSheet, Pressable, Platform} from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: "white",
        overflow: Platform.OS === "android" ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

const CategoryGridTile = ({title, color, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: "#ccc"}}
                style={[styles.button, {backgroundColor: color}]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;
