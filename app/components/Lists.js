import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from "../theme/colors";

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: colors.secondary
    },
    itemText: {
        color: colors.primary,
        textAlign: "center"
    }
});

const Lists = ({datas}) => {
    return datas.map(data => <View key={data} style={styles.listItem}>
        <Text style={styles.itemText} key={data}>{data}</Text>
    </View>)
        ;
};

export default Lists;
