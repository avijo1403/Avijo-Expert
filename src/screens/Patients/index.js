import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, dashboardData, hp } from "../../assets/Data";
import Card from "../../components/Card";
import SearchItem from "../../components/SearchItem";
import { FloatingAction } from "react-native-floating-action";

export default function Patients({ navigation }) {

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
            const response = await fetch(`${BaseUrl2}/doctor/patientGetAll`);
            const response2 = await fetch(`${BaseUrl2}/doctor/patientReportGetAll`);
            const json = await response.json();
            const json2 = await response2.json();
            setPatientData(json.data.statistics[0]);
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
            <HeaderItem3 onPress={() => navigation.goBack()} text="Patients" right2={<Image source={require('../../assets/images/whiteAdd2.png')} style={{ height: 25, width: 25 }}/>} onRightPress2={()=>navigation.navigate('AddQuestion')} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <SearchItem image={require('../../assets/images/filter.png')} />
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/clock2.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%" }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Total Patients</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>{patientData.todayPatients} Today</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/calendar3.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%" }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Monthly Patients</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>{patientData.monthlyPatients} this Month</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', width: '90%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, marginTop: '5%' }}>
                    <Image source={require('../../assets/images/yearly.png')} style={{ height: 56, width: 56 }} />
                    <View style={{ paddingLeft: "5%" }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Yearly Patients</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>Total Patients {patientData.yearlyPatients} this year</Text>
                    </View>
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
                                <Card onPress={() => navigation.navigate('PatientCategory')} name={item.patient} gender={item.gender} bloodGroup={item.bloodGroup} age={item.age} date={date} phone={item?.phoneNumber} showGender={true} image={require('../../assets/images/dash1.png')} />
                            )
                        }} />
                </View>
            </ScrollView>
            <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    navigation.navigate('PatientInfo')
                }}
                overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}