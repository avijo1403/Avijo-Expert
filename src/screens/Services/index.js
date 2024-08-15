import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2 } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function Services({ navigation }) {

    const [serviceData, setServiceData] = useState([]);


    const formatDate = (dateString) => {

        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear().toString().replace(/^/, '');
        return `${day} ${month} ${year}`;

    };

    const fetchData = async () => {
        try {

            const response = await fetch(`${BaseUrl2}/doctor/getAllServices`);
            const json = await response.json();
            setServiceData(json.data);
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
            <HeaderItem3 onPress={() => navigation.goBack()} onRightPress={()=>navigation.navigate('NewService')} text="Services" showSearch={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={serviceData}
                    renderItem={({ item }) => {
                        const date1 = formatDate(item.createdDate);
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate('EditService')} style={{ width: '90%', alignItems: 'center', borderWidth: 1, padding: '2%', borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%', }}>
                                <View style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    alignItems: 'flex-start',
                                }}>
                                    <Image source={require('../../assets/images/dash2.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                    <View style={{ marginLeft: '3%', width: '78%' }}>
                                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                            <View style={{ width: "80%" }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '125%', justifyContent: 'space-between', marginLeft: '0%' }}>
                                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.name}</Text>
                                                    {/* <View style={{width:'22%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={()=>navigation.navigate('EditService')}>
                                                        <Image source={require('../../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                    </View> */}
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: "95%", justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', width: '50%' }}>
                                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%' }}>status:</Text>
                                                        <Text style={{ fontFamily: 'Gilroy-Medium', color: item.status === "Active" ? colors.green : colors.red, fontSize: 10, padding: 3, backgroundColor: item.status === "Active" ? colors.lightGreen : colors.lightRed, borderRadius: 10, marginLeft: '2%' }}>  {item.status}  </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%', width: 70 }}>Created at:</Text>
                                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: 150, color: colors.grey, textAlign: 'left', }}>{date1}</Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: 150, color: colors.black, textAlign: 'left', marginTop: '2%', marginLeft: '2%' }}>Price:<Text style={{ color: colors.grey }}>(Rs.)</Text>: <Text style={{ color: colors.grey }}>{item.price}</Text></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="Export" image={<Image source={require('../../assets/images/export.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View>
            </ScrollView>
        </View>
    )
}