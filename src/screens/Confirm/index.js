import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

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