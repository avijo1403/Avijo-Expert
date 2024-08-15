import React, { useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';
import { colors } from "../Theme/GlobalTheme";

const SquareRadio = (props) => {
    const [condition, setCondition] = useState(props.condition || false);

    const handlePress = () => {
        setCondition(!condition);
        if (props.onClick) {
            props.onClick(!condition); // Invoke onClick function if provided
        }
    };

    return (
          <Pressable onPress={handlePress} style={styles.container}>
                <CheckBox
                    uncheckedCheckBoxColor={colors.grey}
                    checkBoxColor={colors.blue}
                    style={{ flex: 1, padding: '5%' }}
                    onClick={handlePress} // Ensure CheckBox onClick is handled
                    isChecked={condition}
                />
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
    );
};

export default SquareRadio;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1%',
        height: 60,
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: colors.grey,
        fontFamily: 'Gilroy-Medium',
        paddingLeft: '1%',
    },
    check: {
        height: 15,
        width: 15,
    }
});
