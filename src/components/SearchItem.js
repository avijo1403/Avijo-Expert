import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function SearchItem(props){

    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/search1.png')} style={{height:24, width:24}}/>
            <TextInput
            placeholder="Search"
            placeholderTextColor={colors.darkGrey}
            style={styles.search}
            />
            <Image source={props.image} style={{height:24, width:22}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:100,
        paddingLeft:'5%',
        borderColor:colors.darkGrey,
        height:47,
        backgroundColor:colors.white,
        elevation:2,
    },
    search:{
        width:'80%',
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        paddingLeft:10,
    }
})