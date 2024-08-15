import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import SquareRadio3 from "../../components/SquareRadio3";

export default function AccessControl({ navigation }) {

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
                <Text style={{fontSize:20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width:'90%', marginTop:'5%' }}>Access</Text>
                <Text style={{fontSize:14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width:'90%', marginTop:'5%' }}>Patient</Text>
                <View style={{flexDirection:"row", alignItems:'center', width:"95%", marginLeft:"5%"}}>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Read"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Edit"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Create"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Delete"/>
                    </View>
                </View>
                <Text style={{fontSize:14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width:'90%', }}>Appointments</Text>
                <View style={{flexDirection:"row", alignItems:'center', width:"95%", marginLeft:"5%"}}>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Read"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Edit"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Create"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Delete"/>
                    </View>
                </View>
                <Text style={{fontSize:14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width:'90%' }}>Invoices</Text>
                <View style={{flexDirection:"row", alignItems:'center', width:"95%", marginLeft:"5%"}}>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Read"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Edit"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Create"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Delete"/>
                    </View>
                </View>
                <Text style={{fontSize:14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width:'90%', }}>Payments</Text>
                <View style={{flexDirection:"row", alignItems:'center', width:"95%", marginLeft:"5%"}}>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Read"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Edit"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Create"/>
                    </View>
                    <View style={{width:"25%"}}>
                        <SquareRadio3 text="Delete"/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}