import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, wp } from "../../assets/Data";
import Card from "../../components/Card";

export default function InvoiceDoc({ navigation }) {

    const [invoiceData, setInvoiceData] = useState([]);

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
            const response = await fetch(`${BaseUrl2}/doctor/getAllInvoices`);
            const json = await response.json();
            setInvoiceData(json.data);
            console.log('json:', json.data);
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
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Appointments</Text>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={invoiceData}
                        renderItem={({ item }) => {
                            const date1 = formatDate(item.createdDate);
                            const date2 = formatDate(item.dueDate);
                            return (
                                <TouchableOpacity onPress={()=>navigation.navigate('PreviewInvoice')} style={{ width: '90%', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '73%', justifyContent: 'space-between', marginLeft: '0%' }}>
                                        <Text style={{ color: colors.black, fontSize: 12, fontFamily: 'Gilroy-Medium', padding: '2%', alignSelf: 'flex-start', width: '130%' }}>Invoice ID:  #{item.invoiceId}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../assets/images/dots2.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Image source={require('../../assets/images/dash3.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                        <View style={{ marginLeft: '3%', width: '80%' }}>
                                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                                <View style={{ width: "80%" }}>
                                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%', width: wp('80%') }}>{item.patient}</Text>
                                                    <Text style={{ color: colors.darkGrey, fontSize: 12, fontFamily: 'Gilroy-Medium', paddingLeft: '2%', width: wp('80%') }}>example@gmail.com</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%', width: wp('17%') }}>Created at:</Text>
                                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', width: wp('20%'), color: colors.grey, textAlign: 'left', }}>{date1}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%', width: wp('15%') }}>Due Date:</Text>
                                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', width: wp('20%'), color: colors.grey, textAlign: 'left' }}>{date2}</Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', width: 150, color: colors.black, textAlign: 'left', marginTop: '2%', marginLeft: '2%' }}>Amount<Text style={{ color: colors.grey }}>(Rs.)</Text>: <Text style={{ color: colors.grey }}>{item.amount}</Text></Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
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