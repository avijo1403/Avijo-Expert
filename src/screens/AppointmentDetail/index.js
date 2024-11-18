import React, { useEffect, useState } from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import { BaseUrl2, formatDate } from "../../assets/Data";

export default function AppointmentDetail({ navigation, route }) {

    const id = route?.params?.id;

    const [data, setData] = useState({});
    const [refreshing, setRefreshing] = useState(false);

    const fetchAppointment = async () => {
        setRefreshing(true);
        try {
            const response = await fetch(`${BaseUrl2}/user/appointment/${id}`);
            const json = await response.json();
            console.log('json:', json?.appointment);
            setData(json?.appointment);
        } catch (e) {
            console.log('error fetching appointment', e);
        }
        setRefreshing(false);
    }

    const onRefresh = () => {
        setRefreshing(true);

        fetchAppointment();

        setTimeout(() => {
            setRefreshing(false);
        }, 2000); 
    };


    useEffect(() => {
        fetchAppointment();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Appointment Details" onPress={() => navigation.goBack()} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.blue]}
                        tintColor={colors.blue}
                    />}
                style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.darkGrey, marginTop: '5%' }}>Patient Details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '5%', justifyContent: "space-between" }}>
                    <Image source={require('../../assets/images/pp.png')} style={{ height: 58, width: 58, borderRadius: 100 }} />
                    <View style={{ width: "80%", paddingLeft: '3%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.darkGrey, }}>{data?.userId?.fullName}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '2%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, }}>Gender: <Text style={{ color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Male</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilsroy-Medium', color: colors.blue, }}>Age: <Text style={{ color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>30</Text></Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '90%', color: colors.black, marginTop: '10%' }}>Appointment Details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Appointment ID</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>1644172</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Distance.  </Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>30 Km away</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>{formatDate(data?.createdAt)}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>{data?.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Transaction ID</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>1644172</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Status</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>Completed</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Appointment for</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>Chest Pain</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, }}>Attachment</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, }}>report355356.pdf</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%' }}>
                    <Button1 onPress={() => navigation.navigate('Chat', { userId: data?.userId?._id, doctorId: data?.doctorId?._id, name: data?.userId?.fullName })} Text="Chat" leftImage={<Image source={require('../../assets/images/whiteChat2.png')} style={{ height: 24, width: 24, marginRight: '5%' }} />} />
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
        backgroundColor:colors.white,
    }
})