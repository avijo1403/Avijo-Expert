import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import { detailOption } from "../../assets/Data";
import Button2 from "../../components/Button2";
import Button3 from "../../components/Button3";

export default function AboutFacility({ navigation, route }) {

    const businessName = route?.params?.name;
    const [select, setSelect] = useState(0);

    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image source={require('../../assets/images/facility1.png')} style={{ height: 116, width: '40%' }} />
                    <Text style={{ textAlign: 'center', fontSize: 16, fontFamily: 'Gilroy-SemiBold', width: '50%', color: colors.black }}>{businessName}</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        data={detailOption}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ marginLeft: '5%', paddingRight: '5%', marginTop: "7%" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelect(item.id)} style={{ alignItems: 'center', borderBottomWidth: 2, borderColor: colors.grey }}>
                                <Text style={{ paddingLeft: 10, paddingRight: 10, textAlign: 'center', fontSize: 14, fontFamily: 'Gilroy-SemiBold', borderBottomWidth: 2, borderColor: select === item.id ? colors.blue : colors.white, color: select === item.id ? colors.blue : colors.black }}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={styles.about}>About</Text>
                <Text style={[styles.aboutText, { marginTop: '2%' }]}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <Text style={[styles.aboutText, { marginTop: '3%' }]}>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text style={styles.about}>Professional</Text>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'center', justifyContent: 'center', marginTop: '5%' }}>
                    <View style={{ width: '90%', marginTop: '0%', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Image source={require('../../assets/images/dr6.png')} style={{ width: 56, height: 58, borderRadius: 5 }} />
                        <View style={{ marginLeft: '5%', width: '80%' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.blue }}>Dr. Jane Cooper</Text>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '60%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Exp. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>22 years</Text></Text>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>fees. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$30</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', marginBottom: '5%' }}>
                                <TouchableOpacity style={{ backgroundColor: colors.blue, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/follow2.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Follow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/notify.png')} style={{ height: 10, width: 10, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Notify me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/ask2.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Ask</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/dot1.png')} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/stars.png')} style={{ height: 12, width: 73, marginTop: '2%' }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>(152)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.specialization}>Services</Text>
                <Text style={styles.generalMedicine}>Hypertension Treatment</Text>
                <Text style={styles.generalMedicine}>Diabetes Management</Text>
                <Text style={styles.generalMedicine}>ECG</Text>
                <Text style={styles.specialization}>Department</Text>
                <Text style={styles.generalMedicine}>Cardiologist</Text>
                <Text style={styles.generalMedicine}>Generalist</Text>
                <Text style={styles.specialization}>Address</Text>
                <Text style={styles.generalMedicine}>Pysical examinations and vaccinations</Text>
                <Text style={styles.generalMedicine}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '3%' }}>Distance. <Text style={{ color: colors.black }}>30 Km away</Text></Text>
                <TouchableOpacity style={{ width: '90%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '90%', marginTop: '3%' }}>Get Directions</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                    <View style={{ width: '50%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                        <Button3 Text="Book Visit" left={<Image source={require('../../assets/images/inClinic.png')} style={{ height: 22, width: 22, marginRight: 5 }} />} onPress={() => navigation.navigate('ConfirmBooking')} />
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                        <Button2 backgroundColor={colors.blue} Text="Consult Online" left={<Image source={require('../../assets/images/video2.png')} style={{ height: 22, width: 22, marginRight: 5 }} />} onPress={() => navigation.navigate('ConfirmBooking')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    about: {
        fontSize: 16,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        width: '90%',
        paddingTop: '5%'
    },
    aboutText: {
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color: colors.darkGrey,
        width: '90%'
    },
    specialization: {
        fontSize: 16,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        width: '90%',
        marginTop: '5%'
    },
    generalMedicine: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        color: colors.darkGrey,
        width: '90%',
        marginTop: '2%'
    }
})