import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem2(props) {

    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{props.text}</Text>
            </View>
            <TouchableOpacity>
                {props.right}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: '5%',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:colors.white,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '10%',
        color: colors.black,
    }
})