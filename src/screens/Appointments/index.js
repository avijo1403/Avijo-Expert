import React, { useEffect, useState } from "react";
import { FlatList, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, dashboardData, formatDate, getTimeDifference } from "../../assets/Data";
import SearchItem from "../../components/SearchItem";
import Button1 from "../../components/Button1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FloatingAction } from "react-native-floating-action";

export default function Appointments({ navigation }) {

    const [data, setData] = useState([]);
    const [todayData, setTodayData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setRefreshing(true);

        const email = await AsyncStorage.getItem('email');
        try {

            const getProfileId = await fetch(`${BaseUrl2}/doctor/getAllDoctorProfile`);
            const profileJson = await getProfileId.json();
            const profileId = await profileJson?.data?.find((item) => item?.emailId === email);
            // console.log('profileId:', profileId?._id);

            const response1 = await fetch(`${BaseUrl2}/user/appointments`);

            const json1 = await response1.json();
            const appoints = await json1?.appointments?.filter((item) => item?.doctorId?._id === profileId?._id);
            const todayAppoints = await appoints?.filter((item) => formatDate(item?.createdAt) === formatDate(new Date()));
            console.log('json1:', todayAppoints, profileId?._id);
            setTodayData(todayAppoints);
            setData(appoints);
        } catch (e) {
            console.log('error fetching...', e);
        }
        setRefreshing(false);
    }

    const onRefresh = () => {
        setRefreshing(true);

        fetchData();

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Appointments</Text>
                </View>
                <View style={{ flexDirection: 'row', width: "25%", justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditAppointment')}>
                        <Image source={require('../../assets/images/dashboard2.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/calendar4.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientDetail')}>
                        <Image source={require('../../assets/images/clock3.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.blue]}
                        tintColor={colors.blue}
                    />}
                style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <SearchItem />
                </View>
                {/* <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Today Appointments</Text> */}
                {/* <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={todayData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('AppointmentDetail', { id: item._id })} style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={require('../../assets/images/profile3.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%' }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item?.userId?.fullName}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item.time}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Status:</Text>
                                        <Text style={{ color: item.status === 'pending' ? colors.orange : item.status === 'success' ? colors.green : colors.red, backgroundColor: item.status === 'pending' ? colors.lightOrange : item.status === 'success' ? colors.lightGreen : colors.lightRed, fontSize: 10, padding: '2%', borderRadius: 20, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%' }}>pending</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{getTimeDifference(item?.createdAt)}</Text>
                            </TouchableOpacity>
                        )} />
                </View> */}
                {/* <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Recent Appointments</Text> */}
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('AppointmentDetail', { id: item._id })} style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={require('../../assets/images/profile3.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%' }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item?.userId?.fullName}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item?.time}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Status:</Text>
                                        <Text style={{ color: item.status === 'pending' ? colors.orange : item.status === 'success' ? colors.green : colors.red, backgroundColor: item.status === 'pending' ? colors.lightOrange : item.status === 'success' ? colors.lightGreen : colors.lightRed, fontSize: 10, padding: '2%', borderRadius: 20, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%' }}>pending</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{getTimeDifference(item?.createdAt)}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '2%', marginBottom: "5%" }}>
                    <Button1 Text="Add" onPress={() => navigation.navigate('AddAppointment')} image={<Image source={require('../../assets/images/plus.png')} style={{ height: 24, width: 24 }} />} />
                </View> */}
            </ScrollView>
            <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    navigation.navigate('AddAppointment')
                }}
                overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}