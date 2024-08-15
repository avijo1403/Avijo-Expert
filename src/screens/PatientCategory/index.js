import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { medicine, PatientCategoryData, wp } from "../../assets/Data";

export default function PatientCategory({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Michael" right={
                <TouchableOpacity style={{ marginLeft: "50%" }}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>7+</Text>
                    </View>
                    <Image source={require('../../assets/images/whiteNoti.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('80%'), textAlign: 'left', marginTop: '4%' }}>Micheal</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>+1 459883886</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginLeft: "10%", marginTop: "5%", marginBottom: "5%" }}>
                    <FlatList
                        style={{ width: "100%" }}
                        data={PatientCategoryData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                if (item.to) {
                                    navigation.navigate(item.to)
                                }
                            }} style={{ width: '90%', backgroundColor: colors.lightgrey, borderRadius: 12, marginTop: "5%", flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.image} style={{ height: 20, width: 20, marginLeft: "5%" }} />
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, padding: "5%", paddingLeft: '3%' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            </ScrollView>
        </View>
    )
}