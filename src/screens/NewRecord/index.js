import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { ScrollView } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import Collapsible1 from "../../components/Collapsible";
import SquareRadio from "../../components/SquareRadio";
import SquareRadio2 from "../../components/SquareRadio2";
import LoginInput from "../../components/LoginInput";
import Button2 from "../../components/Button2";
import Button1 from "../../components/Button1";

export default function NewRecord({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="New Medical Record" right={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24, marginLeft: '50%' }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('80%'), textAlign: 'left', marginTop: '4%' }}>Micheal</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>+1 459883886</Text>
                    </TouchableOpacity>
                </View>
                <Collapsible1 text="Hugo Loris" heading="Title" />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Complains</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Bad Breath, Toothache..."
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Diagnosis</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Ginginits, Periodonitis..."
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Vital Signs</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Blood Pressure, Pulse rate..."
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Treatment</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', alignSelf: 'flex-start', marginLeft: '2%' }}>
                    <View style={{ width: '47%' }}>
                        <SquareRadio2 text="Dental Crowns" />
                    </View>
                    <View style={{ width: '50%' }}>
                        <SquareRadio2 text="Teeth Whitening" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', alignSelf: 'flex-start', marginLeft: '2%' }}>
                    <View style={{ width: '50%' }}>
                        <SquareRadio2 text="Tooth Extraction" />
                    </View>
                    <View style={{ width: '50%' }}>
                        <SquareRadio2 text="Dental Sealants" />
                    </View>
                </View>
                <View style={{ width: '40%', alignSelf: 'flex-start', marginLeft: "2%" }}>
                    <SquareRadio2 text="Dental Sealants" />
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '0%' }}>Treatment</Text>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Complains</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="Paracetamol"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Item Price (Rs):</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="1000"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Dosage</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="1 - M/A/E"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                </View>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Instraction</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="After meal"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Quantity</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="1"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                    <View style={{ width: '32%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Amount</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 30, fontSize: 10, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                            placeholder="1000"
                            placeholderTextColor={colors.grey}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button2 onPress={()=>navigation.navigate("AddItem")} Text="Add Medicine" image={<Image source={require('../../assets/images/blueAdd.png')} style={{ height: 24, width: 24 }} />} />
                </View>
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 20 }}>PRESCRIPTION UPLOAD</Text>
                <View style={{ marginTop: '5%', height: 125, width: 156 }}>
                    <TouchableOpacity style={{ position: 'absolute', zIndex: 2, alignSelf: 'flex-end', marginRight: '2%', marginTop: '2%' }}>
                        <Image source={require('../../assets/images/redCross.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/prescription2.png')} style={{ height: 125, width: 156 }} />
                </View>
                <View style={{width:"90%", height:1, backgroundColor:colors.grey, marginTop:"10%"}}/>
                <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop:"5%" }} />
                <Text style={{fontFamily:'Gilroy-SemiBold', color:colors.black, fontSize:18, marginTop:'3%'}}>Drag your image here</Text>
                <Text style={{fontFamily:'Gilroy-Medium', color:colors.grey, fontSize:12, marginTop:'3%'}}>(Only *JPEG and *PNG images will be accepted)</Text>
                <View style={{width:"100%", alignItems:'center', marginTop:"5%", marginBottom:"5%"}}>
                    <Button1 Text="Save" image={<Image source={require('../../assets/images/whiteTick.png')} style={{height:16, width:16, marginLeft:"3%"}}/>}/>
                </View>
            </ScrollView>
        </View>
    )
}