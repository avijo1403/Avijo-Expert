import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { BaseUrl2, dashboardData } from "../../assets/Data";
import Card from "../../components/Card";
import Button1 from "../../components/Button1";

export default function Receptions({navigation}){

    const [receptionData, setReceptionData] = useState([]);

    
    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getAllReceptions`);
            const json = await response.json();
            setReceptionData(json.data);
            console.log('json:', json.data);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <View style={styles.container}>
        <HeaderItem3 onPress={()=>navigation.goBack()} onRightPress={()=>navigation.navigate('AddStuff')} text="Receptions" showSearch={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />} />
        <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:'center'}}>
        <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                    style={{width:'100%'}}
                    contentContainerStyle={{alignItems:'center'}}
                        data={receptionData}
                        renderItem={({ item }) => (
                            <Card name={item.fullName} phone={item.phoneNumber} title={item.title} email={item.email} image={require('../../assets/images/dash2.png')} showTitle={true} />
                        )} />
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                <Button1 Text="Export" image={<Image source={require('../../assets/images/export.png')} style={{height:24, width:24, marginLeft:'2%'}}/>}/>
                </View>
                </ScrollView>
        </View>
    )
}