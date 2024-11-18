import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import ToggleSwitch from "toggle-switch-react-native";
import SettingToggle from "../../components/SettingToggle";
import CircleRadio from "../../components/CircleRadio";

export default function Privacy({ navigation }) {


    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Privacy Settings" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Privacy Policy</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <SettingToggle text="Allow search engines to index your name" subText="Learn more" subColor={colors.grey} />
                <SettingToggle text="Allow adult content in recommendations" subText="Learn more" subColor={colors.grey} />
                <SettingToggle text="Allow your profile to be discovered by email" subText="Learn more" subColor={colors.grey} />
                <SettingToggle text="Allow large language models to be trained on your content" subText="Learn more" subColor={colors.grey} />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '10%' }}>Inbox Preferences</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '3%' }}>Who can send you message?</Text>
                <View style={{ width: '90%', marginTop: '3%' }}>
                    <CircleRadio text="Anyone on Docare" />
                </View>
                <View style={{ width: '90%', marginTop: '3%' }}>
                    <CircleRadio text="People I Follow and  admins and moderators of spaces I follow" />
                </View>
                <View style={{ width: '90%', marginTop: '3%' }}>
                    <CircleRadio text="No one" />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '3%' }}>Comment Preferences</Text>
                <SettingToggle text="Allow people to comment on your answers and posts" subColor={colors.grey} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '3%' }}>Content Preferences</Text>
                <SettingToggle text="Allow GIFs to play automatically" subColor={colors.grey} />
                <SettingToggle text="Allow advertisers on Docare to promote your answers" subText="Learn more" subColor={colors.grey} />
                <SettingToggle text="Notify your subcribers of your new questions" subColor={colors.grey} />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '3%' }}>Delete or Deactivate your Account</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Regular', color: colors.red, width: '90%', marginTop: '3%', borderBottomWidth:1, paddingBottom:'5%', borderColor:colors.grey }}>Deactivate Account</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Regular', color: colors.red, width: '90%', marginTop: '5%', borderBottomWidth:1, paddingBottom:'5%', borderColor:colors.grey }}>Delete Account</Text>
            </ScrollView>
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