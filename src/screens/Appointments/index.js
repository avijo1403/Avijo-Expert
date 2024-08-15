import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { dashboardData } from "../../assets/Data";
import SearchItem from "../../components/SearchItem";
import Button1 from "../../components/Button1";

export default function Appointments({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width:'75%' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Appointments</Text>
                </View>
                <View style={{ flexDirection: 'row', width: "25%", justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EditAppointment')}>
                        <Image source={require('../../assets/images/dashboard2.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/calendar4.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('PatientDetail')}>
                        <Image source={require('../../assets/images/clock3.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
                <SearchItem image={require('../../assets/images/filter.png')}/>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Today Appointments</Text>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={dashboardData}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={item.image} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%' }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item.duartion}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', alignItems:'center', marginTop:'4%'}}>
                                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>Status:</Text>
                                        <Text style={{color:item.status === 'pending' ? colors.orange:item.status === 'success'?colors.green:colors.red, backgroundColor:item.status === 'pending' ? colors.lightOrange:item.status === 'success'?colors.lightGreen:colors.lightRed, fontSize:10, padding:'2%', borderRadius:20, marginLeft:'3%', paddingLeft:'5%', paddingRight:'5%'}}>{item.status}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{item.time}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Recent Appointments</Text>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center', paddingBottom:'5%' }}
                        data={dashboardData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('AppointmentDetail')} style={{ flexDirection: 'row', width: '90%', alignItems: 'center', borderWidth: 1, padding: "5%", borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%' }}>
                                <Image source={item.image} style={{ height: 56, width: 56, borderRadius: 100 }} />
                                <View style={{ marginLeft: '5%', width: '60%' }}>
                                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                        <Image source={item.status === 'pending' ? require('../../assets/images/clock.png') : item.status === 'cancel' ? require('../../assets/images/cross.png') : require('../../assets/images/tick.png')} style={{ height: 24, width: 24 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '3%' }}>{item.duartion}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', alignItems:'center', marginTop:'4%'}}>
                                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>Status:</Text>
                                        <Text style={{color:item.status === 'pending' ? colors.orange:item.status === 'success'?colors.green:colors.red, backgroundColor:item.status === 'pending' ? colors.lightOrange:item.status === 'success'?colors.lightGreen:colors.lightRed, fontSize:10, padding:'2%', borderRadius:20, marginLeft:'3%', paddingLeft:'5%', paddingRight:'5%'}}>{item.status}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>{item.time}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'2%', marginBottom:"5%"}}>
                    <Button1 Text="Add" onPress={()=>navigation.navigate('AddAppointment')} image={<Image source={require('../../assets/images/plus.png')} style={{height:24, width:24}}/>}/>
                </View>
            </ScrollView>
        </View>
    )
}