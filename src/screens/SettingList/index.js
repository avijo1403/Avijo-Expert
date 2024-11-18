import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";


export default function SettingList({ navigation }) {

    const data = [
        {
            id: 0,
            text: 'Account',
            to: 'AccSetting'
        },
        {
            id: 1,
            text: 'Privacy',

            to: 'Privacy',
        },
        {
            id: 2,
            text: 'Display',
            to: 'DisplaySetting'
        },
        {
            id: 3,
            text: 'Email & Notifications',
            to: 'EmailAndNotiSettings',
        },
        {
            id: 4,
            text: 'Languages',
        }
    ]

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("id");
            await navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        } catch (e) {
            console.log('error while logout', e);
        }
    }

    return (
        <View>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Setting" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')} style={{ width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Profile Setting</Text>
                </TouchableOpacity>
                {data.map((item) => (<TouchableOpacity onPress={() => item.to && navigation.navigate(item.to)} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{item.text}</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>))}
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '10%' }}>Docare+ & Space Subcriptions</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Subscription')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Subcriptions & Billing</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Logout</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
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