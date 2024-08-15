import React from "react";
import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import { wp } from "../assets/Data";

const { width: screenWidth } = Dimensions.get('window');

export default function Card(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            flexDirection: 'row',
            width: '90%',
            alignItems: 'flex-start',
            borderWidth: 1,
            padding: '5%',
            borderRadius: 8,
            borderColor: colors.lightgrey,
            backgroundColor: colors.white,
            elevation: 5,
            marginTop: '5%'
        }}>
            <Image source={props.image} style={{ height: 56, width: 56, borderRadius: 100 }} />
            <View style={{ marginLeft: '3%', width: '80%' }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ width: "70%" }}>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{props.name}</Text>
                        <Text style={{ color: colors.darkGrey, fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '2%' }}>{props.phone}</Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={props.eyePress}>
                            <Image source={require('../assets/images/blueEye.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.binPress}>
                            <Image source={require('../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        {props.showEdit && <TouchableOpacity onPress={props.editPress}>
                            <Image source={require('../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>}
                    </View> */}
                </View>
                {props.showTitle && <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('12%') }}>Title:</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: wp('20%'), color: colors.grey, textAlign: 'left' }}>{props.title}</Text>
                </View>}
                {props.showTitle && <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('14%') }}>Email:</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: wp('80%'), color: colors.grey, textAlign: 'left', }}>{props.email}</Text>
                </View>}
                {props.showGender && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: "95%", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%' }}>Gender:</Text>
                        <Text style={{ fontFamily: 'Gilroy-Medium', color: props.gender === "Male" ? colors.red : colors.green, fontSize: 9, padding: 3, backgroundColor: props.gender === "Male" ? colors.lightRed : colors.lightGreen, borderRadius: 10, marginLeft: '2%' }}>  {props.gender}  </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%' }}>Blood Group:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium' }}> {props.bloodGroup}</Text></Text>
                    </View>
                </View>}
                {props.showGender && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%', width: "90%", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('18%') }}>Created at:</Text>
                        <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', width: wp('20%'), color: colors.grey, textAlign: 'left' }}>{props.date}</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('25%'), textAlign: 'right', }}>Age:<Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', width: wp('25%') }}>{props.age} Years</Text></Text>
                </View>}
                {props.showPayment && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: "95%", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%' }}>Status:</Text>
                        <Text style={{ fontFamily: 'Gilroy-Medium', color: props.status === 'pending' ? colors.orange : props.status === 'success' ? colors.green : colors.red, fontSize: 9, padding: 3, backgroundColor: props.status === 'pending' ? colors.lightOrange : props.status === 'success' ? colors.lightGreen : colors.lightRed, borderRadius: 10, marginLeft: '2%' }}>  {props.status}  </Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%' }}>Method:<Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium' }}> Cash</Text></Text>
                </View>}
                {props.showPayment && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%', width: "95%", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('10%') }}>Date:</Text>
                        <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', width: wp('20%'), color: colors.grey }}>08 May 2025</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', width: wp('30%'), textAlign: 'right', }}>Amount:<Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium' }}> $200</Text></Text>
                </View>}
            </View>
        </TouchableOpacity>
    )
}
