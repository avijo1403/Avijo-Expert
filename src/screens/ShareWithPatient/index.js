import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function ShareWithPatient({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Share with patient via" onPress={()=>navigation.goBack()}/>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: "90%", flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 8, elevation: 5, padding: '3%', marginTop: "10%" }}>
                    <Image source={require('../../assets/images/blueEmail.png')} style={{ height: 44, width: 44 }} />
                    <View style={{ paddingLeft: '5%', width: "80%" }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Email</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%' }}>Send to patient Email address</Text>
                    </View>
                </View>
                <View style={{ width: "90%", flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 8, elevation: 5, padding: '3%', marginTop: "7%" }}>
                    <Image source={require('../../assets/images/blueChat.png')} style={{ height: 44, width: 44 }} />
                    <View style={{ paddingLeft: '5%', width: "80%" }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>SMS</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%' }}>Send to patient Phone Number</Text>
                    </View>
                </View>
                <View style={{ width: "90%", flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 8, elevation: 5, padding: '3%', marginTop: "7%" }}>
                    <Image source={require('../../assets/images/blueWhatsapp.png')} style={{ height: 44, width: 44 }} />
                    <View style={{ paddingLeft: '5%', width: "80%" }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Whatapp</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%' }}>Send to patient Whatapp</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop:"10%" }}>
                    <Button1 Text="Send" />
                </View>
            </ScrollView>
        </View>
    )
}