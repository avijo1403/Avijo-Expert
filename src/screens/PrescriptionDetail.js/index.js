import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";

export default function PrescriptionDetail() {

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Prescription Pad" right={<Image source={require('../../assets/images/dots2.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 56, width: 56 }} />
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold' }}>Imtiyaz</Text>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}> */}
                        <Text style={{ fontSize: 14, color: colors.black, fontFamily: 'Gilroy-Medium' }}>MBBS/MD</Text>
                        <Text style={{ fontSize: 14, color: colors.darkGrey, fontFamily: 'Gilroy-Medium' }}>General Physician</Text>
                        {/* <Image source={require('../../assets/images/down-arrow.png')} style={{ height: 16, width: 16, marginLeft: '3%' }} /> */}
                        {/* </View> */}
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%' }}>
                            <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>Imtiyaz</Text>
                            <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Male, 32 year(s), +5768683454</Text>
                        </View>
                        <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.torquish }}>12/04/2024, 12:24 PM </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>UHID</Text>
                        <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>eka101</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>Chief Complaints</Text>
                        <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Chest pain (Since 1 week)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>Diagnosis</Text>
                        <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Typhoid Fever</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 11, color: colors.black, fontFamily: 'Gilroy-Bold', width: '4%', marginLeft: '5%' }}>1</Text>
                    <View style={{ width: '86', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold', width: '22%' }}>Medications</Text>
                            <Text style={{ fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold', width: '22%' }}>Frequency</Text>
                            <Text style={{ fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold', width: '22%' }}>Duration</Text>
                            <Text style={{ fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold', width: '22%' }}>Remarks</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center' }}>
                            <View style={{ width: "22%", alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>Telma H tablet</Text>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>Telmisaartan</Text>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>Hydrochloronic</Text>
                            </View>
                            <View style={{ width: "22%", alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>1-1-1-1</Text>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>After Meal</Text>
                            </View>
                            <View style={{ width: "22%", alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>60 Days</Text>
                            </View>
                            <View style={{ width: "22%", alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: colors.darkGrey, fontFamily: 'Gilroy-Medium', width: '100%', marginTop: '2%' }}>Lorem ipsum</Text>
                            </View>
                        </View>
                        <View style={{ height: 1, width: '95%', backgroundColor: colors.black, marginTop: '5%' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>Advice</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 30, backgroundColor: colors.black }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Lorem ipsum dummy text </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 30, backgroundColor: colors.black }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Lorem ipsum dummy text </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '3%' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 30, backgroundColor: colors.black }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '2%', }}>Lorem ipsum dummy text </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, }}>Follow Up</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', }}>Visit on <Text style={{ color: colors.black }}>Monday, May 12 2024</Text></Text>
                    </View>
                    <View style={{ height: 1, width: '95%', backgroundColor: colors.black, marginTop: '5%' }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.white, marginBottom: '5%', paddingBottom: '5%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: '5%', marginLeft:'5%'}}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, borderBottomWidth:1, paddingBottom:'2%' }}>New Template</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft:'5%' }}>Update existing Template</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: '5%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%', height: 32, borderRadius: 5, borderColor: colors.lightgrey, alignSelf: 'flex-start', marginLeft: '5%', justifyContent: 'space-between', borderWidth: 1 }}>
                            <TextInput style={{ fontSize: 10, alignSelf: 'flex-start', padding: 2, width: '100%', paddingLeft: 10, }} placeholder="Template name" />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: colors.torquish, padding: '2%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: colors.white, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}