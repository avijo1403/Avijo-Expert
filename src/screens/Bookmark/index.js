import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";

export default function Bookmark(){

    return(
        <View style={styles.container}>
            <HeaderItem3 text="Bookmarks"/>
            <View style={{flex:1, width:'100%', alignItems:'center', justifyContent:'center'}}>
                <Image source={require('../../assets/images/box.png')} style={{height:84, width:84}}/>
                <Text style={{fontSize:24, fontFamily:'Gilroy-SemiBold', color:colors.black, textAlign:'center', marginTop:'5%'}}>No Bookmarks</Text>
                <Text style={{fontSize:20, fontFamily:'Gilroy-Medium', color:colors.grey, textAlign:'center', width:'90%', marginTop:'3%'}}>You can bookmarks answers, posts and shares from their menu</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.white,
    }
})