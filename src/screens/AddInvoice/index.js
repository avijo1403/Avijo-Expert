import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";
import Collapsible1 from "../../components/Collapsible";
import LoginInput from "../../components/LoginInput";
import SquareRadio2 from "../../components/SquareRadio2";
import { wp } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function AddInvoice({navigation}) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 60 }}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:"5%"}}>
                <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                </TouchableOpacity>
                <Text style={{ color: colors.black, fontSize: 20, fontFamily: "Gilroy-SemiBold", paddingLeft: '5%' }}>Add Item</Text>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ color: colors.darkGrey, fontSize: 16, fontFamily: "Gilroy-SemiBold", width: '90%' }}>Service</Text>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button2 onPress={() => navigation.navigate("MedAndService")} Text="Add Item" image={<Image source={require('../../assets/images/blueAdd.png')} style={{ height: 24, width: 24 }} />} />
                </View>
                <LoginInput text="Quantity" placeholder="Select Instruction" />
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "90%" , marginTop:'7%'}}>Summary</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Service name</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>Paracetamol</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Item Price</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>$2412</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Quantity</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>12</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Total</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>$268406</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center', marginTop: "10%", marginBottom: "5%" }}>
                    <Button1 Text="Add now" onPress={()=>navigation.navigate('EditInvoice')} image={<Image source={require('../../assets/images/whiteAdd.png')} style={{ height: 24, width: 24, marginLeft: "3%" }} />} />
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
    }
})