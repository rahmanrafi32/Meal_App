import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
    }
});

const MealDetail = ({duration, complexity, style, textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>Time: {duration}Min</Text>
            <Text style={[styles.detailItem, textStyle]}>Procedure: {complexity.toUpperCase()}</Text>
        </View>
    );
};

export default MealDetail;
