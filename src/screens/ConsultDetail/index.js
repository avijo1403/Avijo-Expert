import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import { wp } from "../../assets/Data";

export default function ConsultDetail({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Appointment details" onPress={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentConftainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Account')} style={{ padding: 10, borderRadius: 0, borderColor: colors.lightgrey, width: wp(90), marginRight: 10, marginTop: '5%', borderBottomWidth: 1, backgroundColor: colors.white, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/patient.png')} style={{ height: 92, width: 92, borderRadius: 10 }} />
                        <View style={{ paddingLeft: '2%', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '5%' }}>Anushka</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '5%', paddingLeft: '4%' }}>Breathing Problem</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'column', marginTop: '5%' }}>
                                    <View style={{ flexDirection: 'row', padding: 5, paddingTop: 0, alignItems: 'center', borderRadius: 6 }}>
                                        <Text style={{ paddingLeft: 5, fontSize: 12, color: colors.blue, fontFamily: 'Gilroy-Medium' }}>Gender: <Text style={{ color: colors.black }}>Male</Text></Text>
                                        <Text style={{ paddingLeft: 5, fontSize: 12, color: colors.blue, fontFamily: 'Gilroy-Medium' }}> Age: <Text style={{ color: colors.black }}>30</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={styles.detailHeading}>Appointment Details</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Appointment ID</Text>
                    <Text style={styles.detail}>1644172</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Distance.</Text>
                    <Text style={styles.detail}>30 Km away</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detail}>12 June 2020</Text>
                    <Text style={styles.detail}>12:00 pm</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Transaction ID</Text>
                    <Text style={styles.detail}>1644172</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Status</Text>
                    <Text style={styles.detail}>Completed</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Appointment for</Text>
                    <Text style={styles.detail}>Chest Pain</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Attachment</Text>
                    <Text style={styles.detail}>report355356.pdf</Text>
                </View>
                <Text style={styles.detailHeading}>Payment Details</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Consultation Fee</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Total Payment</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Payment mode</Text>
                    <Text style={styles.detail}>Pay at Clinic</Text>
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalOption}>Total Saving</Text>
                    <Text style={styles.totalOption}>$40.00</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <Button1 Text="Download" onPress={()=>navigation.navigate('Reviews')}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Consultation')} style={styles.callContainer}>
                    <Image source={require('../../assets/images/chat4.png')} style={{ height: 16, width: 16 }} />
                    <Text style={styles.call}>Chat</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonSubContainer, { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.blue }]}>
                        <Text style={styles.buttonText1}>Cancel Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Reschedule')} style={[styles.buttonSubContainer, { backgroundColor: colors.blue }]}>
                        <Text style={styles.buttonText}>Reshedule</Text>
                    </TouchableOpacity>
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
    },
    detailHeading:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        marginTop:'5%',
        alignSelf:'center'
    },
    patientContainer:{
        flexDirection:'row',
        width:'90%',
        padding:'5%',
        paddingLeft:'0%',
        alignSelf:'center'
    },
    subPatient:{
        marginLeft:'5%',
        width:'90%',
    },
    patientName:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    genderContainer:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'3%'
    },
    gender:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.blue,
    },
    genderDetail:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    detailContainer:{
        flexDirection:'row',
        width:'90%',
        paddingTop:'3%',
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center'
    },
    detailOption:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    detail:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
    },
    callContainer:{
        flexDirection:'row',
        height:45, 
        width:'90%',
        borderWidth:1,
        borderColor:colors.blue,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:"5%", 
        alignSelf:'center'
    },
    call:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        paddingLeft:'3%',
        color:colors.blue,
    },
    totalOption:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        color:colors.blue,
    },
    totalContainer:{
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:colors.lightgrey,
        padding:'3%',
        borderRadius:8,
        marginTop:'5%',
        alignSelf:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        paddingBottom:'5%'
    },
    buttonSubContainer:{
        height:44,
        width:'48%',
        alignItems:'center',
        borderRadius:8,
        marginTop:'5%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    },
    buttonText1:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.blue,
    }
})