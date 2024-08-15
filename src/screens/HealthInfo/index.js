import React from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import LoginInput from "../../components/LoginInput";
import Collapsible1 from "../../components/Collapsible";
import Button1 from "../../components/Button1";

export default function HealthInfo({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Michael" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Collapsible1 heading="Blood Group" text="Blood Type" />
                <LoginInput text="Weight" placeholder="60kg" />
                <LoginInput text="Height" placeholder="5.5ft" />
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%', paddingLeft: '2%' }}>Allergies</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                    placeholder="beans,nuts, etc."
                    textAlignVertical="top"
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%', paddingLeft: '2%' }}>Habits</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                    placeholder="smoking, drinking, etc."
                    textAlignVertical="top"
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%', paddingLeft: '2%' }}>Medical History</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                    placeholder="diabetes, malaria, glaucoma, etc."
                    textAlignVertical="top"
                    placeholderTextColor={colors.grey}
                />
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '10%', marginRight: '1%', marginBottom: '5%' }}>
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