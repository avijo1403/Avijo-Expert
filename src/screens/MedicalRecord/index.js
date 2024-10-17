import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl1, medicineData, wp } from "../../assets/Data";
import styles from "./style";
import Button1 from "../../components/Button1";
import { FloatingAction } from "react-native-floating-action";

export default function MedicalRecord({ navigation }) {

    const [recordData, setRecordData] = useState([]);

    const formatDate = (dateString) => {
        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0'); // Add leading zero if needed
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear().toString().replace(/^/, ''); // Remove leading "20"

        return `${day} ${month} ${year}`;
    };

    const fetchData = async () => {

        try {
            // const data = { "phoneNumber": 1234567 }
            const response = await fetch(`${BaseUrl1}/doctor/medicalRecords`
                //     ,{
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(data)
                // }
            );
            const json = await response.json();
            console.log('json:', json.data);
            setRecordData(json.data);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Medical Record" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('80%'), textAlign: 'left', marginTop: '4%' }}>Micheal</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>+1 459883886</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('90%'), textAlign: 'left', marginTop: '10%' }}>Medical Record</Text>
                <FlatList
                    style={{ width: "100%" }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={recordData}
                    renderItem={({ item }) => {

                        const date1 = formatDate(item.date);

                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('EditMedicalRecord')} style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, elevation: 5, marginTop: '5%', padding: '5%', backgroundColor: colors.white }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 14 }}>{date1}</Text>
                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '18%', justifyContent: 'space-between' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('MedicalRecordView')}>
                                        <Image source={require('../../assets/images/blueEye.png')} style={{ height: 24, width: 24 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>navigation.navigate('EditMedicalRecord')}>
                                        <Image source={require('../../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                                    </TouchableOpacity>
                                </View> */}
                                </View>
                                <View style={{ alignItems: 'flex-start', width: wp('80%') }}>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 12, marginTop: '1%', textAlign: 'left' }}>Complaints:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey }}> {item.complaint}</Text></Text>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 12, marginTop: '1%', textAlign: 'left' }}>Diagnosis:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey }}> {item.diagnosis}</Text></Text>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 12, marginTop: '1%', textAlign: 'left' }}>Treatment:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey }}> {item.treatment}</Text></Text>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 12, marginTop: '1%', textAlign: 'left' }}>Prescription:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey }}> {item.prescription}</Text></Text>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', fontSize: 12, marginTop: '1%', textAlign: 'left' }}>(Tsh)<Text style={{ fontSize: 12, fontFamily: 'Gilroy-Bold', color: colors.blue }}> {item.tsh}</Text></Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="New Record" onPress={() => navigation.navigate('NewRecord')} image={<Image source={require('../../assets/images/plus.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View> */}
            </ScrollView>
            <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    navigation.navigate('PrescriptionForm')
                }}
                overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}