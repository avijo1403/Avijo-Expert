import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { Image } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { appData, BaseUrl2, dashboardData, getTimeDifference, hp, wp } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchItem from "../../components/SearchItem";
import VideoNotification from "../../components/VideoNotification";
import uuid from 'react-native-uuid';

export default function Dashboard({ navigation }) {

    const [select, setSelect] = useState(1);
    const [column, setColumn] = useState(3);
    const [docData, setDocData] = useState([]);
    const [appointData, setAppointData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const uniqueId = uuid.v4();

    const [modalVisible, setModalVisible] = useState(false);


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

    const fetchData = async () => {
        setRefreshing(true);
        const id = await getData('id');
        const email = await getData('email');
        try {

            const getProfileId = await fetch(`${BaseUrl2}/doctor/getAllDoctorProfile`);
            const profileJson = await getProfileId.json();
            const profileId = await profileJson?.data?.find((item) => item?.emailId === email);
            // console.log('profileId:', profileId?._id);

            const response = await fetch(`${BaseUrl2}/doctor/doctorAppointment`);
            const response1 = await fetch(`${BaseUrl2}/user/appointments`);

            const json = await response.json();
            const json1 = await response1.json();
            const appoints = await json1?.appointments?.filter((item) => item?.doctorId?._id === profileId?._id);
            console.log('json1:', appoints, profileId?._id);
            setAppointData(appoints);
            setDocData(json.data.appointments[0]);
            console.log('json:', json.data.appointments[0]);
        } catch (e) {
            console.log('error fetching...', e);
        }
        setRefreshing(false);
    }


    const handleSelect = (no) => {
        setSelect(no);
    };

    const onRefresh = () => {
        setRefreshing(true);

        fetchData();

        setTimeout(() => {
            setRefreshing(false);
        }, 2000); 
    };

    useEffect(() => {
        fetchData();
        console.log('uid:', uniqueId);
    }, [])

    const Dashboard = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '7%', marginBottom: '5%' }}>
                    <SearchItem image={require('../../assets/images/filter.png')} />
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Patients')} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', paddingTop:'3%', paddingBottom:'3%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, }}>
                        <Image source={require('../../assets/images/total.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Total Patients</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '3%' }}>{docData.totalPatients}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Appointments')} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%',paddingTop:'3%', paddingBottom:'3%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, }}>
                        <Image source={require('../../assets/images/appointment.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Appointments</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '3%' }}>{docData.appointments}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PrescriptionForm')} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', paddingTop:'3%', paddingBottom:'3%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, }}>
                        <Image source={require('../../assets/images/prescription.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Prescriptions</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '3%' }}>{docData.prescriptions}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('PrescriptionForm')} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', paddingTop:'3%', paddingBottom:'3%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8,  }}>
                        <Image source={require('../../assets/images/earning.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%", width: '80%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Total Earnings</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '3%' }}>{docData.totalEarnings}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ width: '90%', fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>Today Appointments</Text>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={appointData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>setModalVisible(true)} style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={require('../../assets/images/profile3.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%', }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item?.userId?.fullName}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item?.time}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{getTimeDifference(item?.createdAt)}</Text>
                            </TouchableOpacity>
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
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.blue]} 
                        tintColor={colors.blue}
                    />}
            >
                {select === 1 && <Dashboard />}
                {select === 2 && <Apps />}
            </ScrollView>
            <VideoNotification visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
    )
}