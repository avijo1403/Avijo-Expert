import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

export default function Confirm({navigation}){

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    },[])

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/confirm.png')} style={{height:84, width:83.5}}/>
            <Text style={styles.thankYou}>Thank You!</Text>
            <Text style={styles.text}>Your Profile is submitted for verification.After verification your profile URL will sended at your email fhxducnf@gjf.com</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
        flex:1,
        justifyContent:'center'
    },
    thankYou:{
        fontSize:20,
        fontFamily:'Gilroy-Bold',
        color:colors.black,
        marginTop:'5%'
    },
    text:{
        fontSize:12,
        fontFamily:'Gilroy-Medium',
        width:'90%',
        textAlign:'center',
        marginTop:'5%',
        color:colors.darkGrey,
    }
})