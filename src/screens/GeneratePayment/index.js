import React from "react";
import { ScrollView, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import Collapsible1 from "../../components/Collapsible";
import Button1 from "../../components/Button1";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

export default function GeneratePayment({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="Generate Payments" />
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
                <Collapsible1 heading="Status" text="Status" />
                <Collapsible1 heading="Payment Method" text="Payment Method" />
                <View style={{width:'100%', alignItems:'center', marginTop:'10%'}}>
                <Button1 Text="Generate" image={<Image source={require('../../assets/images/update.png')} style={{height:16, width:16, marginLeft:'2%'}}/>}/>
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