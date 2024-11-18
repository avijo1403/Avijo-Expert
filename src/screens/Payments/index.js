import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { dashboardData, hp } from "../../assets/Data";
import Card from "../../components/Card";
import SearchItem from "../../components/SearchItem";

export default function Payments({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Payments" showNoti={false} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <SearchItem />
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '10%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/clock2.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%" }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Total Patients</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>10 Today</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, height: hp(8) }}>
                        <Image source={require('../../assets/images/calendar3.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ paddingLeft: "5%" }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Monthly Patients</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>400 this Month</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', width: '90%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, marginTop: '5%' }}>
                    <Image source={require('../../assets/images/yearly.png')} style={{ height: 56, width: 56 }} />
                    <View style={{ paddingLeft: "5%" }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Yearly Patients</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingTop: '3%' }}>Total Patients 1,200 this year</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Payments</Text>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}
                        data={dashboardData}
                        renderItem={({ item }) => (
                            <Card onPress={()=>navigation.navigate('PaymentReview')} name="Ananya" phone="+1 459883886" showPayment={true} image={item.image} status={item.status} showEdit={true} />
                        )} />
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