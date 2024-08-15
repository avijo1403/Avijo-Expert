import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem(props) {

    return (
        <View style={[styles.container,{backgroundColor: props.blue? colors.blue:colors.white,}]}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '90%', alignItems: 'center' }}>
                {/* <TouchableOpacity onPress={props.onBack}>
                    <Image source={require('../assets/images/blackLeft.png')} style={{ width: 15, height: 14 }} />
                </TouchableOpacity> */}
                <Text style={[styles.text,{color: props.blue? colors.white:colors.black,}]}>{props.text}</Text>
                <Text style={{ color: colors.red, fontSize: 16, fontFamily: 'Gilroy-SemiboldItalic', paddingTop: '5%' }}>Expert</Text>
            </View>
            <TouchableOpacity style={{ marginRight: '5%' }} onPress={props.onRightPress}>
                {props.image}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.notiPress}>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>7+</Text>
                </View>
                {props.blue ? <Image source={require('../assets/images/whiteNoti.png')} style={{ height: 30, width: 28 }} />:<Image source={require('../assets/images/notification.png')} style={{ height: 30, width: 28 }} />}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '8%',
        paddingRight: '20%',


    },
    text: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
    },
    numberContainer: {
        height: 14,
        width: 14,
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 13,
        position: 'absolute',
        zIndex: 2,
        marginLeft: 15,
        alignItems: 'center'
    },
    number: {
        fontSize: 6,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        color: colors.black,
        paddingTop: 2,
        paddingLeft: 2
    }
})