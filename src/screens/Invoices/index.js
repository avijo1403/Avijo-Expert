import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, dashboardData, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";
import { FloatingAction } from "react-native-floating-action";

export default function Invoices({ navigation }) {

    const [invoiceData, setInvoiceData] = useState([]);

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
            <HeaderItem3 onPress={() => navigation.goBack()} onRightPress={() => navigation.navigate('CreateInvoice')} text="Invoices" showSearch={false} right2={<Image source={require('../../assets/images/upload2.png')} style={{ height: 26, width: 26 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={invoiceData}
                    renderItem={({ item }) => {
                        const date1 = formatDate(item.createdDate);
                        const date2 = formatDate(item.dueDate);
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('PreviewInvoice')} style={{ width: '90%', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '98%', marginLeft: '0%' }}>
                                    <Text style={{ color: colors.black, fontSize: 12, fontFamily: 'Gilroy-Medium', padding: '2%', alignSelf: 'flex-start', width: "100%" }}>Invoice ID:  #{item.invoiceId}</Text>
                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between', marginLeft:"35%" }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('MedicalRecordView')}>
                                            <Image source={require('../../assets/images/blueEye.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('EditInvoice')}>
                                            <Image source={require('../../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                    </View> */}
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
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="Export" image={<Image source={require('../../assets/images/export.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View> */}
            </ScrollView>
            <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    navigation.navigate('EditInvoice')
                }}
                overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}