import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import Collapsible1 from "../../components/Collapsible";
import Collapsible2 from "../../components/Collapsible2";
import LoginInput from "../../components/LoginInput";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import { wp } from "../../assets/Data";

export default function ViewCampaign({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Veiw Compaign" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ width: "100%", alignItems: 'center' }}>
                    <LoginInput text="Compaign Title" placeholder="Offer on Dental Checkup"/>
                <View style={{ width: '92%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ width: '49%' }}>
                        <Collapsible2 text="All Patients" heading="Send to" />
                    </View>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="Email Subject " />
                    </View>
                </View>
                <View style={{ width: '92%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="Header" />
                    </View>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="Sub-header" />
                    </View>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Message</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Dear Delight Patient..."
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Image ( Option)</Text>
                <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop: "5%" }} />
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 18, marginTop: '3%' }}>Drag your image here</Text>
                <Text style={{ fontFamily: 'Gilroy-Medium', color: colors.grey, fontSize: 12, marginTop: '3%' }}>(Only *JPEG and *PNG images will be accepted)</Text>
            </View>
            </ScrollView>
        </View>
    )
}