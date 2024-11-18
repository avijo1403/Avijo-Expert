import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import ToggleSwitch from "toggle-switch-react-native";

export default function AccSetting({navigation}) {
    const [active, setActive] = useState(false);

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="Account Settings" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Email</Text>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>example@gmail.com</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Primary</Text>
                </View>
                <TextInput
                    placeholder="Add Another Email Address"
                    placeholderTextColor={colors.blue}
                    style={{ width: '90%', fontSize: 16, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Password</Text>
                <TextInput
                    placeholder="Change Password"
                    placeholderTextColor={colors.blue}
                    style={{ width: '90%', fontSize: 16, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Country of residence</Text>
                <TextInput
                    placeholder="Pakistan"
                    placeholderTextColor={colors.grey}
                    style={{ width: '90%', fontSize: 16, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Country of residence</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', borderBottomWidth: 1, borderColor: colors.grey, }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingBottom: '3%', marginTop: '5%' }}>Require email verification</Text>
                    <ToggleSwitch
                        isOn={active}
                        onColor={colors.blue}
                        offColor={colors.grey}
                        thumbOnStyle={{ backgroundColor: colors.white }}
                        thumbOffStyle={{ backgroundColor: colors.white }}
                        size="small"
                        style={{ marginLeft: 10 }}
                        onToggle={() => setActive(!active)}
                    />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Connected Accounts & Contacts</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Facebook</Text>
                <TextInput
                    placeholder="Connect Facebook Account"
                    placeholderTextColor={colors.blue}
                    style={{ width: '90%', fontSize: 16, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Google</Text>
                <TextInput
                    placeholder="example@gmail.com"
                    placeholderTextColor={colors.blue}
                    style={{ width: '90%', fontSize: 16, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
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