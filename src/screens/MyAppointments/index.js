import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import SearchItem from "../../components/SearchItem";
import { colors } from "../../Theme/GlobalTheme";
import { offerData } from "../../assets/Data";

export default function MyAppointments({navigation}) {

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <HeaderItem2 text="My Appointments" onPress={()=>navigation.goBack()} right={<Image source={require('../../assets/images/dotBlue.png')} style={{ width: 4, height: 18 }} />} />
                <SearchItem />
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: '10%' }}>
                        <View >
                            <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>My Consultations</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Upcoming</Text>
                        </View>
                    </View>
                    <FlatList
                        nestedScrollEnabled={true}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ paddingBottom: '5%' }}
                        data={offerData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ConsultDetail')} style={{ width: '90%', marginTop: '5%', flexDirection: 'row', marginLeft: '5%', marginBottom: '5%' }}>
                                <Image source={require('../../assets/images/dr6.png')} style={{ width: 44, height: 53, borderRadius: 5, alignSelf: 'center' }} />
                                <View style={{ marginLeft: '5%', width: '100%' }}>
                                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 16, color: colors.blue }}>Dr. Jane Cooper</Text>
                                    <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                                    <View style={{ flexDirection: 'row', marginTop: '0%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Status: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Completed</Text></Text>
                                        <View style={{ padding: 8, borderRadius: 7, backgroundColor: colors.skyblue }}>
                                            <Text style={{ color: colors.blue, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>Online</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '3%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 10, fonthFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>12 June 2020 | 12:00 pm</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 25, justifyContent: 'space-between', marginRight: '1%' }}>
                                            <Image source={require('../../assets/images/phone2.png')} style={{ height: 12, width: 12 }} />
                                            <Image source={require('../../assets/images/chat2.png')} style={{ height: 12, width: 12 }} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}