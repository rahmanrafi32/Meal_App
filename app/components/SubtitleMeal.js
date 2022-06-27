import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from "../theme/colors";

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.secondary,
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 2
    }
});

const SubtitleMeal = ({children}) => {
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
        ;
};

export default SubtitleMeal;
