import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";

export default function Language() {

    const data=[
        {
            id:0,
            text:'English',
            color:colors.blue,
            primary:true,
        },
        {
            id:1,
            text:'Espanol',
            color:colors.orange,
            primary:false,
        },
        {
            id:2,
            text:'Francis',
            color:colors.green,
            primary:false,
        },
        {
            id:3,
            text:'Deutch',
            color:colors.darkBlue,
            primary:false,
        },
        {
            id:4,
            text:'Italiano',
            color:colors.orange,
            primary:false,
        },
        {
            id:5,
            text:'Javap',
            color:colors.red,
            primary:false,
        },
        {
            id:6,
            text:'Italiano',
            color:colors.orange,
            primary:false,
        },
        {
            id:7,
            text:'Javap',
            color:colors.red,
            primary:false,
        },
        {
            id:8,
            text:'Italiano',
            color:colors.orange,
            primary:false,
        }
    ]

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Language Settings" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {data.map((item)=>(<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', borderBottomWidth: 2, borderColor: colors.grey, paddingTop: '2%', paddingBottom: '2%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ padding: '5%', backgroundColor: item.color, borderRadius: 100, fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>{item?.text?.substring(0, 2)?.toUpperCase()}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginLeft: '10%' }}>{item.text}</Text>
                    </View>
                    {item.primary && 
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginLeft: '10%' }}>Primary</Text>}
                </View>))}
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