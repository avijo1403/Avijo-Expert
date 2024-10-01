import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import { hp, wp } from "../../assets/Data";

export default function Account({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Account" onPress={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('DrProfile')} style={{ flexDirection: 'columns', width: '90%', marginTop: '5%', backgroundColor: colors.white, padding: 5, borderRadius: 3 }}>
                    <Image source={require('../../assets/images/profile3.png')} style={{ width: 56, height: 56, borderRadius: 200 }} />
                    <View style={{ paddingLeft: '5%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}> Anthony Atkielski</Text>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ width: '90%', alignItems: 'flex-start', flexDirection: 'column', marginTop: '10%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white }}>
                        <Image source={require('../../assets/images/chat6.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Chats</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/createAd.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Create Ad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/dollar.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Monetization</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/content.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Your content & stats</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Bookmark')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/bookmark.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Bookmarks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/draft.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Drafts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DrProfile')} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '5%', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, marginTop: '5%' }}>
                        <Image source={require('../../assets/images/doCare.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ paddingLeft: wp(5) }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Try Docare +</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 2, width: '80%', backgroundColor: colors.grey, marginTop: '5%', alignSelf: 'flex-start', marginLeft: '5%' }} />
                <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '3%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Try Docare +</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SettingList')} style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '3%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Language')} style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '3%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Languages</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Support')} style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '3%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Support & Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '3%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}