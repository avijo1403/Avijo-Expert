import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import Card from "../../components/Card";
import { facilityData } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";

export default function Facility({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Facility" right2={<Image source={require('../../assets/images/whiteDot.png')} style={{height:20, width:5}}/>} onRightPress2={()=>navigation.navigate('AboutFacility')}/>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                style={{width:'100%'}}
                contentContainerStyle={{alignItems:'center'}}
                    data={facilityData}
                    renderItem={({ item }) => (
                        <Card image={item.image} name={item.name} phone={item.heading} subHeading={item.subHeading} />
                    )} />
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