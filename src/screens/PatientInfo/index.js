import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import LoginInput from "../../components/LoginInput";
import Collapsible1 from "../../components/Collapsible";
import Button1 from "../../components/Button1";

export default function PatientInfo({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Michael" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                </View>
                <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop: "10%" }} />
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 18, marginTop: '3%' }}>Drag your image here</Text>
                <Text style={{ fontFamily: 'Gilroy-Medium', color: colors.grey, fontSize: 12, marginTop: '3%' }}>(Only *JPEG and *PNG images will be accepted)</Text>
                <LoginInput text="Full Name" />
                <LoginInput text="Phone Number" />
                <LoginInput text="Email" />
                <Collapsible1 heading="Gender" text="Gender" />
                <LoginInput text="Emergency Contact" />
                <Collapsible1 heading="Date of Birth" text="Select Date" />
                <LoginInput text="Address" />
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '5%', marginRight: '1%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.lightRed, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Delete Account</Text>
                        <Image source={require('../../assets/images/redBin2.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}