import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const Button1 = (props) => {


    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {props.leftImage}
            <Text style={styles.TextStyle}>{props.Text}</Text>
            {props.image}
        </TouchableOpacity>
    )
}
export default Button1;

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 5.47,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.white,
        marginTop: 0,
        alignSelf: 'center'
    }
})