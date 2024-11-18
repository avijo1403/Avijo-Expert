import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, wp } from "../../assets/Data";
import Card from "../../components/Card";

export default function PatientDoc({ navigation }) {

    const [patientData, setPatientData] = useState([]);
    const [reportData, setReportData] = useState([]);

    const formatDate = (dateString) => {
        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0'); // Add leading zero if needed
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear().toString().replace(/^20/, ''); // Remove leading "20"

        return `${day} ${month} ${year}`;
    };

    const fetchData = async () => {
        try {
            const response2 = await fetch(`${BaseUrl2}/doctor/patientReportGetAll`);
            const json2 = await response2.json();
            setReportData(json2.data);
            console.log('json:', json2.data);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Dr.Alicia Johns" showNoti={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '5%', marginLeft: "10%" }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Image source={require('../../assets/images/add.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: wp(30), textAlign: 'center', marginTop: '4%', lineHeight: 25 }}>Add Profile Photo</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ alignItems: 'flex-start', marginLeft: '5%', width: "90%", alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('40%'), textAlign: 'center', marginTop: '4%', }}>Micheal</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('40%'), textAlign: 'center', marginTop: '2%' }}>example@gmail.com</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('40%'), textAlign: 'center', marginTop: '2%' }}>+1 459883886</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Patients</Text>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}
                        data={reportData}
                        renderItem={({ item }) => {
                            const date = formatDate(item.createdAt);
                            return (
                                <Card onPress={() => navigation.navigate('PatientDetail')} name={item.patient} gender={item.gender} bloodGroup={item.bloodGroup} age={item.age} date={date} phone="+1 459883886" showGender={true} image={require('../../assets/images/dash1.png')} />
                            )
                        }} />
                </View>
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