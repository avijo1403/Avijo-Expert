import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import Card from "../../components/Card";
import { BaseUrl2, facilityData } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Facility({ navigation }) {

    const [facility, setFacility] = useState([]);


    const fetchFacility = async () => {
        // const token = await AsyncStorage.getItem('token');
        // console.log('token:', token);
        try {
            const response = await fetch(`${BaseUrl2}/facility//getAll/facilityProfile`);
            const json = await response.json();
            console.log('response:', json.data);
            setFacility(json.data);
        } catch (e) {
            console.log('error fetching facility', e);
        }
    }

    useEffect(() => {
        fetchFacility();
    }, [])

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Facility" right2={<Image source={require('../../assets/images/whiteDot.png')} style={{ height: 20, width: 5, marginRight: 10 }} />} onRightPress2={() => navigation.navigate('AboutFacility')} onPress={()=>navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={facility}
                    renderItem={({ item }) => (
                        <Card image={require('../../assets/images/facility1.png')} name={item.businessName} phone={item.fullName} subHeading={item.emailId} onPress={() => navigation.navigate('AboutFacility', { name: item.businessName })} />
                    )} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    }
})