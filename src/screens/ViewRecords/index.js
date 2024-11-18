import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { Image } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

export default function ViewRecords() {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="12/04/2024" right2={<Image source={require('../../assets/images/share.png')} style={{ height: 30, width: 30 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.white,
    }
})