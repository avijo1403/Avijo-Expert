import React, { useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';
import { colors } from "../Theme/GlobalTheme";

const SquareRadio3 = (props) => {
    const [condition, setCondition] = useState(props.condition || false);

    const handlePress = () => {
        setCondition(!condition);
        if (props.onClick) {
            props.onClick(!condition); // Invoke onClick function if provided
        }
    };

    return (
        <Pressable onPress={handlePress} style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <CheckBox
                uncheckedCheckBoxColor={colors.grey}
                checkBoxColor={colors.blue}
                style={{ flex: 1, padding: '5%' }}
                onClick={handlePress} // Ensure CheckBox onClick is handled
                isChecked={condition}
            />
        </Pressable>
    );
};

export default SquareRadio3;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1%',
        height: 60,
        justifyContent: 'center',
        // borderWidth:1
    },
    text: {
        fontSize: 14,
        color: colors.black,
        fontFamily: 'Gilroy-Medium',
        paddingLeft: '1%',
    },
    check: {
        height: 15,
        width: 15,
    }
});
