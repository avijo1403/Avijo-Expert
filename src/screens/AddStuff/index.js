import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { wp } from "../../assets/Data";
import LoginInput from "../../components/LoginInput";
import Collapsible1 from "../../components/Collapsible";
import SquareRadio3 from "../../components/SquareRadio3";
import Button1 from "../../components/Button1";

export default function AddStuff({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 60 }}>
                <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                <Text style={{ color: colors.black, fontSize: 20, fontFamily: "Gilroy-SemiBold", paddingLeft: '5%' }}>Add Stuff</Text>
            </View>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '5%' }}>
                <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                    <Image source={require('../../assets/images/add.png')} style={{ height: 20, width: 20 }} />
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: wp(30), textAlign: 'center', marginTop: '4%', lineHeight: 25 }}>Add Profile Photo</Text>
                </TouchableOpacity>
            </View>
            <LoginInput text="Full name" placeholder="Alicia Johns"/>
            <Collapsible1 heading="Title" text="Hugo Loris"/>
            <LoginInput text="Email" placeholder="Enter Your Email"/>
            <LoginInput text="Mobile Number" placeholder="Enter Mobile Number"/>
            <LoginInput text="Password"/>
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
                <View style={{ width: '92%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '5%', marginRight: '1%', marginBottom:'5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height:51, backgroundColor:colors.lightRed, borderRadius:5, alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red}}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:'center',
        backgroundColor:colors.white,
    }
})