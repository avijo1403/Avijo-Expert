import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem3(props) {

    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{props.text}</Text>
            </View>
            <View style={{flexDirection:'row', width:"17%", justifyContent:'space-between', alignItems:'center'}}>
            {props.showSearch && <TouchableOpacity>
                <Image source={require('../assets/images/whiteSearch.png')} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>}
            {props.showNoti && <TouchableOpacity>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>7+</Text>
                </View>
                <Image source={require('../assets/images/whiteNoti.png')} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>}
            <TouchableOpacity onPress={props.onRightPress}>
                {props.right}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onRightPress2}>
                {props.right2}
            </TouchableOpacity>
            </View>
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
        backgroundColor: colors.blue,
        // paddingRight:'10%'
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
        color: colors.white,
    },
    numberContainer: {
        height: 12,
        width: 12,
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
        color: colors.white,
        paddingTop: 2,
        paddingLeft: 2
    }
})