import React from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { dashboardData, medicineData, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";

export default function EditMedicine({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Edit Medicine"/>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <LoginInput text="Medicine name" placeholder="Aspirin" />
                <LoginInput text="Measure" placeholder="cm" />
                <LoginInput text="Price (Rs.)" placeholder="Rs"/>
                <LoginInput text="Instock" placeholder="722"/>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%', paddingLeft: '2%' }}>Instraction</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                    placeholder="Write Description here..."
                    textAlignVertical="top"
                    placeholderTextColor={colors.grey}
                />
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '10%', marginRight: '1%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.lightRed, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}