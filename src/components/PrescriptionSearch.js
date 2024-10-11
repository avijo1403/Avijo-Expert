import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function PrescriptionSearch(props) {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Frame.png')} style={{ height: 15, width: 15 }} />
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={colors.grey}
                style={styles.search}
            />
            <Image source={props.image} style={{ height: 24, width: 22 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: '5%',
        borderColor: colors.lightgrey,
        height: 36,
        backgroundColor: colors.white
    },
    search: {
        width: '80%',
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color: colors.black,
        paddingLeft: 10,
    
    }
})