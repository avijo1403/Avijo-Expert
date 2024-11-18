import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function Campaigns({ navigation }) {

    const [campaignData, setCampaignData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getAllCampaigns`);
            const json = await response.json();
            setCampaignData(json.data);
            console.log('json:', json.data);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getDaysFromGivenDate = (givenDateString) => {
        const currentDate = new Date();
        const givenDate = new Date(givenDateString);
        const differenceInTime = currentDate.getTime() - givenDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays;
    };

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Campaings" right={
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{ marginLeft: "50%" }}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>7+</Text>
                    </View>
                    <Image source={require('../../assets/images/whiteNoti.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>}  />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={campaignData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ViewCampaign')} style={{ width: '95%', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%', }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'flex-start',
                            }}>
                                <Image source={require('../../assets/images/chat5.png')} style={{ height: 36, width: 36, borderRadius: 3 }} />
                                <View style={{ marginLeft: '3%', width: '85%' }}>
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <View style={{ width: "80%" }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '125%', justifyContent: 'space-between', marginLeft: '0%' }}>
                                                <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.titleName}</Text>
                                                {/* <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <TouchableOpacity onPress={() => navigation.navigate('ViewCampaign')}>
                                                        <Image source={require('../../assets/images/blueEye.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                </View> */}
                                            </View>
                                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingLeft: '3%' }}>Offer on Dental Checkup</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <View style={{ width: wp('80%'), height: 1, backgroundColor: colors.lightgrey, marginTop: '5%' }} />
                                <Text style={{ color: colors.black, width: wp('80%'), fontSize: 12, fontFamily: 'Gilroy-SemiBold', }}>{item.secondTitle}</Text>
                                <Text style={{ width: wp('80%'), fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey }}>{item.description}</Text>
                                <Text style={{ color: colors.grey, alignSelf: 'flex-start', fontSize: 10, fontFamily: 'Gilroy-SemiBold', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.grey, marginTop: '2%', marginBottom: '2%' }}>{getDaysFromGivenDate(item.createdAt)} days ago</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item._id}
                />
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="New Campaign" onPress={() => navigation.navigate('CreateCampaign')} image={<Image source={require('../../assets/images/plus.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    numberContainer: {
        height: 12,
        width: 12,
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 13,
        position: 'absolute',
        zIndex: 2,
        marginLeft: 15,
        alignItems: 'center'
    },
    number: {
        fontSize: 6,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        color: colors.white,
        paddingTop: 2,
        paddingLeft: 2
    }
})