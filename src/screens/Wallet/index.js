import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem2 from "../../components/HeaderItem2";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { facilityData } from "../../assets/Data";

function Wallet() {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '5%' }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Wallet</Text>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: '10%' }}>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.black }}>Available Balance</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$ 876543</Text>
                    </View>
                    <TouchableOpacity style={{ height: 46, width: '40%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.white }}>Add Money</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, padding: '5%', backgroundColor: colors.white, width: "100%", marginTop: '10%' }}>Payments</Text>
                <FlatList
                style={{width:'100%'}}
                    data={facilityData}
                    renderItem={({ item }) => (
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%', backgroundColor: colors.white, padding: '5%' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Order #24</Text>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '5%' }}>6th Sep 2024, 04:03</Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, textAlign: 'right' }}>$</Text>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, textAlign: 'right', marginTop: '5%' }}>$24/Wallet</Text>
                            </View>
                        </View>
                    )} />
            </ScrollView>
        </View>
    )
}

export default Wallet;


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.background,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '35%',
        color: colors.black,
    }
})