import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function AppointmentDetail({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Appointment Details" onPress={()=>navigation.goBack()}/>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.darkGrey, marginTop: '5%' }}>Patient Details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '5%', justifyContent: "space-between" }}>
                    <Image source={require('../../assets/images/pp.png')} style={{ height: 58, width: 58, borderRadius: 100 }} />
                    <View style={{ width: "80%", paddingLeft: '3%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.darkGrey, }}>Patient Details</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '2%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, }}>Gender: <Text style={{ color: colors.darkGrey, fontFamily:'Gilroy-SemiBold' }}>Male</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilsroy-Medium', color: colors.blue, }}>Age: <Text style={{ color: colors.darkGrey, fontFamily:'Gilroy-SemiBold' }}>30</Text></Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.black, marginTop: '10%' }}>Appointment Details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Appointment ID</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>1644172</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Distance.  </Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>30 Km away</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>12 June 2020</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>12:00 pm</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Transaction ID</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>1644172</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Status</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>Completed</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Appointment for</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>Chest Pain</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Attachment</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>report355356.pdf</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'10%'}}>
                    <Button1 onPress={()=>navigation.navigate('Chat')} Text="Chat" leftImage={<Image source={require('../../assets/images/whiteChat2.png')} style={{height:24, width:24, marginRight:'5%'}}/>}/>
                </View>
            </ScrollView>
        </View>
    )
}