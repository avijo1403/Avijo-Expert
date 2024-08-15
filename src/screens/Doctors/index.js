import React from "react";
import { FlatList, Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { dashboardData } from "../../assets/Data";
import Card from "../../components/Card";
import Button1 from "../../components/Button1";
import { colors } from "../../Theme/GlobalTheme";

export default function Doctors({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Doctors" showNoti={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Doctors</Text>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={dashboardData}
                        renderItem={({ item }) => (
                            <Card onPress={()=>navigation.navigate('DoctorList')} name="Ananya" phone="+1 459883886" image={item.image} showTitle={true} />
                        )} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="Export" image={<Image source={require('../../assets/images/export.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View>
            </ScrollView>
        </View>
    )
}