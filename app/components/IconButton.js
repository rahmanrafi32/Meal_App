import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        opacity: .7
    }
});

const IconButton = ({icon, color, onPress}) => {
    return <Pressable style={styles.container} onPress={onPress}>
        <AntDesign name={icon} size={24} color={color}/>
    </Pressable>

};

export default IconButton;
