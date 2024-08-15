import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const CircularCheckBox = ({ isChecked, onPress }) => (
    <Pressable onPress={onPress} style={styles.circularContainer}>
        {isChecked && <View style={styles.checkedCircle} />}
    </Pressable>
);

const SelectItem = (props) => {



    return (
        <Pressable onPress={props.handleCondition}>
            <View style={styles.container}>
                <CircularCheckBox isChecked={props.condition} onPress={props.handleCondition} />
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default SelectItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '2%',
        height: 60,
        justifyContent: 'center',
    },
    circularContainer: {
        width: 24, // Adjust size as needed
        height: 24, // Adjust size as needed
        borderRadius: 12, // Make it circular
        borderWidth: 1,
        borderColor: colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14, // Adjust size as needed
        height: 14, // Adjust size as needed
        borderRadius: 7, // Make it circular
        backgroundColor: colors.blue,
    },
    text: {
        fontSize: 12,
        color: colors.grey,
        fontFamily: 'Gilroy-Medium',
        paddingLeft: '3%',
    },
});
