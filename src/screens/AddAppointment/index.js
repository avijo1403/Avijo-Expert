import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import LoginInput from "../../components/LoginInput";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible1 from "../../components/Collapsible";
import Collapsible2 from "../../components/Collapsible2";
import { wp } from "../../assets/Data";
import SquareRadio2 from "../../components/SquareRadio2";
import Button1 from "../../components/Button1";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function AddAppointment({ navigation }) {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());


    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const onChangeHandler = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        onChange(currentDate);
    };

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Add Appointment" onPress={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '95%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginRight: '5%' }}>
                    <View style={{ width: '80%' }}>
                        <LoginInput text="Patient name" placeholder="Micheal" />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientDetail')} style={{ borderWidth: 1, borderColor: colors.blue, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '4%', borderRadius: 8, borderStyle: "dashed", marginTop: '5%' }}>
                        <Image source={require('../../assets/images/blueAdd.png')} style={{ height: 16, width: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilory-Medium', color: colors.blue }}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '93%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ width: '49%' }}>
                        <Collapsible2 heading="Visit Purpose" text="Teeth whitening" />
                    </View>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="Patient name" placeholder="Micheal" />
                    </View>
                </View>
                <View style={{ width: '93%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="Start time" placeholder="2:00 PM" />
                    </View>
                    <View style={{ width: '49%' }}>
                        <LoginInput text="End time" placeholder="3:00 PM" />
                    </View>
                </View>
                <View style={{ width: '93%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ width: '49%' }}>
                        <Collapsible2 heading="Doctor" text="Hugo Loris" />
                    </View>
                    <View style={{ width: '49%' }}>
                        <Collapsible2 heading="Status" text="Status.." />
                    </View>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Description</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('5%') }}
                    textAlignVertical="top"
                    placeholder="She is coming for checkup.."
                    placeholderTextColor={colors.grey}
                />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Share with patient via</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'flex-start', marginLeft: '2%' }}>
                    <View style={{ width: wp(21) }}>
                        <SquareRadio2 text="Email" />
                    </View>
                    <View style={{ width: wp(18) }}>
                        <SquareRadio2 text="SMS" />
                    </View>
                    <View style={{ width: wp(30) }}>
                        <SquareRadio2 text="Whatsapp" />
                    </View>
                </View>
                <View style={{ width: '92%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '5%', marginRight: '1%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.grey, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Discard</Text>
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
                <RNDateTimePicker value={date} />
            </ScrollView>
        </View>
    )
}