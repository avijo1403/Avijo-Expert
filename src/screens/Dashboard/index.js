import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { Image } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { appData, BaseUrl2, dashboardData, hp, wp } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchItem from "../../components/SearchItem";
import VideoNotification from "../../components/VideoNotification";
import uuid from 'react-native-uuid';
import LoginInput from "../../components/LoginInput";

export default function Dashboard({ navigation }) {

    const [select, setSelect] = useState(1);
    const [column, setColumn] = useState(3);
    const [docData, setDocData] = useState([]);

    const uniqueId = uuid.v4();

    const [modalVisible, setModalVisible] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/doctorAppointment`);
            const json = await response.json();
            setDocData(json.data.appointments[0]);
            console.log('json:', json.data.appointments[0]);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (e) {
            console.error('Failed to fetch the data from storage', e);
        }
        return null;
    };

    const handleSelect = (no) => {
        setSelect(no);
    };

    useEffect(() => {
        fetchData();
        console.log('uid:', uniqueId);
        // getData('token').then(token=>console.log('token:',token));
    }, [])

    const Dashboard = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '7%', marginBottom: '5%' }}>
                    <SearchItem image={require('../../assets/images/filter.png')} />
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '10%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/total.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Total Patients</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingTop: '3%', lineHeight: 10 }}>24.08% {docData.totalPatients}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/appointment.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Appointments</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingTop: '3%', lineHeight: 10 }}>21.06% {docData.appointments}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/prescription.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Prescriptions</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingTop: '3%', lineHeight: 10 }}>45.06% {docData.prescriptions}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/earning.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Total Earnings</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingTop: '3%', lineHeight: 10 }}>15.06% {docData.totalEarnings}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ width: '90%', fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>Today Appointments</Text>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={dashboardData}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={item.image} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%', }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item.duartion}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{item.time}</Text>
                            </View>
                        )} />
                </View>
            </View>
        )
    }

    const Apps = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <FlatList
                        style={{ width: '90%' }}
                        contentContainerStyle={{ alignItems: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        data={appData}
                        numColumns={column}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => { item.to && navigation.navigate(item.to) }} style={{ flexDirection: 'column', alignItems: 'center', padding: '0%', justifyContent: 'center', borderWidth: 1, borderRadius: 8, width: wp(28), height: hp(15), borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 3, marginTop: '5%', marginLeft: index % column !== 0 && '3%' }}>
                                <Image source={item.image} style={{ height: 40, width: 40 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%', width: '85%', paddingLeft: '5%', textAlign: 'left', textAlign: 'center', paddingTop: '5%' }}>{item.title}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem notiPress={() => navigation.navigate('Notification')} text="avijo" onRightPress={() => navigation.navigate('Account')} image={<Image source={require('../../assets/images/profile3.png')} style={{ height: 36, width: 36 }} showSearch={true} />} />
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
                <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
                    <Text style={{ color: colors.black, fontSize: 20, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0, }}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
                    <Text style={{ color: colors.black, fontSize: 20, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0 }}>Apps</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                {select === 1 && <Dashboard />}
                {select === 2 && <Apps />}
            </ScrollView>
            <VideoNotification visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
    )
}