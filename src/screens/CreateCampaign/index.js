import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible1 from "../../components/Collapsible";
import LoginInput from "../../components/LoginInput";
import Collapsible2 from "../../components/Collapsible2";
import { BaseUrl2, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function CreateCampaign({ navigation }) {

    const [select, setSelect] = useState(1);
    const [title, setTitle] = useState('');
    const [to, setTo] = useState('');
    const [email, setEmail] = useState('');
    const [header, setHeader] = useState('');
    const [subHeader, setSubHeader] = useState('');
    const [msg, setMsg] = useState('');


    const handleSubmitEmail= async()=>{
        const data = {
            titleName:title,
            
        }
        try{
            const response = await fetch(`${BaseUrl2}/doctor/createCampaign`,{
                method:'POST',
                headers:{
                    'Content-Types':'application/json'
                },
                body:JSON.stringify()
            })
        }catch(e){
            console.log('error uploading...',e);
        }
    }

    const EmailData = () => {
        return (
            <View style={{ width: "100%", alignItems: 'center' }}>
                <View style={{ width: '97%', alignItems: 'center', }}>
                    <Collapsible1 text="Compaign Title" heading="Title" />
                </View>
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
                <View style={{ width: "100%", alignItems: 'center', marginTop: "5%", marginBottom: "5%" }}>
                    <Button1 Text="Send Compaign" />
                </View>
            </View>
        )
    }

    const SmsData = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '95%', alignItems: 'center', marginRight: '2%' }}>
                    <LoginInput text="Title" placeholder="Compaign Title" />
                </View>
                <View style={{ width: '96%', alignItems: 'center', }}>
                    <Collapsible1 text="All Patients" heading="Send to" />
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "88%", marginTop: '5%' }}>Message</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '88%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Dear Delight Patient..."
                    placeholderTextColor={colors.grey}
                />
                <View style={{ width: "100%", alignItems: 'center', marginTop: "5%", marginBottom: "5%" }}>
                    <Button1 Text="Send Compaign" />
                </View>
            </View>
        )
    }

    const WhatsappData = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '95%', alignItems: 'center', marginRight: '2%' }}>
                    <LoginInput text="Title" placeholder="Compaign Title" />
                </View>
                <View style={{ width: '96%', alignItems: 'center', }}>
                    <Collapsible1 text="All Patients" heading="Send to" />
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "88%", marginTop: '5%' }}>Message</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '88%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="Dear Delight Patient..."
                    placeholderTextColor={colors.grey}
                />
                <View style={{ width: "100%", alignItems: 'center', marginTop: "5%", marginBottom: "5%" }}>
                    <Button1 Text="Send Compaign" />
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Create Compaign" />
            <ScrollView style={{ width: '100' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10%', marginBottom: '2%' }}>
                    <TouchableOpacity onPress={() => setSelect(1)} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: select === 1 ? colors.blue : colors.lightgrey, backgroundColor: select === 1 ? colors.blue : colors.white, borderRadius: 30, padding: '2%', paddingLeft: '5%', paddingRight: "5%", marginRight: '3%' }}>
                        <Image source={select === 1 ? require('../../assets/images/whiteSms.png') : require('../../assets/images/blackSms.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: select === 1 ? colors.white : colors.grey, marginLeft: '5%' }}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelect(2)} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: select === 2 ? colors.blue : colors.lightgrey, backgroundColor: select === 2 ? colors.blue : colors.white, borderRadius: 30, padding: '2%', paddingLeft: '5%', paddingRight: "5%", marginRight: '3%' }}>
                        <Image source={select === 2 ? require('../../assets/images/whiteChat.png') : require('../../assets/images/blackChat.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: select === 2 ? colors.white : colors.grey, marginLeft: '5%' }}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelect(3)} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: select === 3 ? colors.blue : colors.lightgrey, backgroundColor: select === 3 ? colors.blue : colors.white, borderRadius: 30, padding: '2%', paddingLeft: '5%', paddingRight: "5%", marginRight: '3%' }}>
                        <Image source={select === 2 ? require('../../assets/images/blackWhatsapp.png') : require('../../assets/images/whiteWhatsapp.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: select === 3 ? colors.white : colors.grey, marginLeft: '5%' }}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
                {select === 1 && <EmailData />}
                {select === 2 && <SmsData />}
                {select === 3 && <WhatsappData />}
            </ScrollView>
        </View>
    )
}