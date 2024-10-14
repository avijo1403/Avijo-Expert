import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import LoginInput from "../../components/LoginInput";
import Button1 from "../../components/Button1";

export default function Settings({ navigation }) {

    const [select, setSelect] = useState(1);

    const Info = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '5%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Image source={require('../../assets/images/add.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: wp(30), textAlign: 'center', marginTop: '4%', lineHeight: 25 }}>Add Profile Photo</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput text="Name" placeholder="Alicia Johns" />
                <LoginInput text="Email" placeholder="example123@gmail.com" />
                <LoginInput text="Mobile Number" placeholder="+18359865917346" />
                <View style={{ width: '92%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '10%', marginRight: '1%' }}>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Delete Account" image={<Image source={require('../../assets/images/whiteBin.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
            </View>
        )
    }

    const Password = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <LoginInput text="Old Password" secureTextEntry={true} />
                <LoginInput text="New Password" secureTextEntry={true} />
                <LoginInput text="Confirm Password" secureTextEntry={true} />
                <View style={{ width: '100%', alignItems: 'center', marginTop: "10%" }}>
                    <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.blue, paddingBottom: '1%' }}>
                <HeaderItem3 onPress={() => navigation.goBack()} onRightPress={() => navigation.navigate('AddQuestion')} text="Settings" />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0, }}>Personal Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0 }}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                {select === 1 && <Info />}
                {select === 2 && <Password />}
            </ScrollView>
        </View>
    )
}