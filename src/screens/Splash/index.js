import React, { useEffect } from "react";
import { View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash({ navigation }) {


    const handleNavigation = async () => {
        const id = await AsyncStorage.getItem('id');
        if (id) {
            navigation.replace('Dashboard');
        }else{
            navigation.replace('Login');
        }
    }

    useEffect(() => {
        handleNavigation();
    }, [])


    return (
        <View style={{ flex: 1, width: '100%', backgroundColor: colors.white }}>
        </View>
    )
}