import React from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
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
                {/* <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                </View> */}
                {/* <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop: "10%" }} />
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 18, marginTop: '3%' }}>Drag your image here</Text>
                <Text style={{ fontFamily: 'Gilroy-Medium', color: colors.grey, fontSize: 12, marginTop: '3%' }}>(Only *JPEG and *PNG images will be accepted)</Text> */}
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop:'10%' }}>
                    <Text style={{color:colors.darkGrey, fontSize:12, fontFamily:'Gilroy-SemiBold' }}>UHI ID</Text>
                    <TouchableOpacity style={{padding:5, backgroundColor:colors.blue, borderRadius:50, paddingLeft:10, paddingRight:10}}>
                        <Text style={{color:colors.white, fontSize:12, fontFamily:'Gilroy-Medium' }}>Generate</Text>
                    </TouchableOpacity>
                </View>
                <View  style={{flexDirection:'row', width:'90%', alignItems:'center', borderWidth:1, marginTop:'3%', borderRadius:3, borderColor:colors.grey}}>
                    <TextInput 
                    placeholder="Enter Health Id"
                    placeholderTextColor={colors.grey}
                    style={{width:'80%', paddingLeft:10}}/>
                    <Text style={{color:colors.blue, fontSize:16, fontFamily:'Gilroy-SemiBold', fontStyle:'italic', width:'20%', textAlign:"center" }}>Get</Text>
                </View>
                <LoginInput text="Full Name" placeholder="Full Name" />
                <LoginInput text="Phone Number" placeholder="Enter Phone Number" />
                <LoginInput text="Email" placeholder="Enter Email" />
                <Collapsible1 heading="Gender" text="Gender" />
                <LoginInput text="Emergency Contact" placeholder="Enter Emergency Contact" />
                <Collapsible1 heading="Date of Birth" text="Select Date" />
                <LoginInput text="Address" placeholder="Enter your Address" />
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