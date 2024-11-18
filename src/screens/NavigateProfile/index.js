import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import HeaderItem2 from "../../components/HeaderItem2";
import HeaderItem3 from "../../components/HeaderItem3";
import { useNavigation } from "@react-navigation/native";

export default function NavigateProfile(props) {

    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>
            {props.removeHeader?'':<HeaderItem3 onPress={()=>navigation.goBack()} text="Create Profile"/>}
            <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <Image source={require('../../assets/images/addProfile.png')} style={{ height: 120, width: 120, marginTop: "50%" }} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '10%', width: '90%', textAlign: 'center' }}>Create your profile</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: '5%', width: '90%', lineHeight: 25, textAlign: 'center' }}>Connect with millions of patients and unlock other great features for growing your practice.</Text>
            </View>
            <View style={{ width: '100%',alignItems:'center', marginBottom:'10%' }}>
                <Button1 onPress={()=>navigation.navigate('CreateProfile')} Text="CREATE YOUR PROFILE"/>
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
        justifyContent:'space-between'
    }
})