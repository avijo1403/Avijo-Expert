import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import { hp, wp } from "../../assets/Data";

export default function Account({navigation}){

    return(
        <View style={styles.container}>
            <HeaderItem2 text="Account" onPress={()=>navigation.goBack()}/>
            <View style={{ flexDirection: 'row', width: '90%', marginTop:'5%', elevation:5, backgroundColor:colors.white, padding:5, borderRadius:3 }}>
                <Image source={require('../../assets/images/appDoc.png')} style={{ width: 77, height: 98 }} />
                <View style={{ paddingLeft: '5%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Dr. Sunil Puraswani</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, marginTop: '5%' }}>-070676-35032</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, marginTop: '5%' }}>Pediatrician</Text>
                </View>
            </View>
            <View style={{width:'90%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginTop:'10%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('DrProfile')} style={{flexDirection:'row', alignItems:'center', width:'48%', padding:'5%', borderWidth:1, borderRadius:8, borderColor:colors.grey, backgroundColor:colors.lightgrey}}>
                    <Image source={require('../../assets/images/profile2.png')} style={{height:26, width:26}}/>
                    <View style={{paddingLeft:wp(5)}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black}}>My Profile</Text>
                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.grey, paddingTop:hp(1)}}>Setup Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', width:'48%',padding:'5%', borderWidth:1, borderRadius:8, borderColor:colors.grey, backgroundColor:colors.lightgrey}}>
                    <Image source={require('../../assets/images/contact.png')} style={{height:26, width:26}}/>
                    <View style={{paddingLeft:wp(3)}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black}}>Contact us</Text>
                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.grey, paddingTop:hp(1)}}>Let us help you</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width:'90%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginTop:'5%'}}>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', width:'48%',padding:'5%', borderWidth:1, borderRadius:8, borderColor:colors.grey, backgroundColor:colors.lightgrey}}>
                    <Image source={require('../../assets/images/setting.png')} style={{height:26, width:26}}/>
                    <View style={{paddingLeft:wp(3)}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black}}>Settings</Text>
                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.grey, paddingTop:hp(1)}}>Change settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center',width:'48%',padding:'5%', borderWidth:1, borderRadius:8, borderColor:colors.grey, backgroundColor:colors.lightgrey}}>
                    <Image source={require('../../assets/images/contact.png')} style={{height:26, width:26}}/>
                    <View style={{paddingLeft:wp(3)}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black}}>Log Out</Text>
                        <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.grey, paddingTop:hp(1)}}>See you soon</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}