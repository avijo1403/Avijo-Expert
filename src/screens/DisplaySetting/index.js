import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import SquareRadio from "../../components/SquareRadio";
import SquareRadio2 from "../../components/SquareRadio2";
import Collapsible2 from "../../components/Collapsible2";
import Collapsible3 from "../../components/Collapsible3";
import Collapsible1 from "../../components/Collapsible";

export default function DisplaySetting({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Display Settings" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Theme</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Adjust how would you like Docare to appear.</Text>
                <View style={{ alignSelf: 'flex-start', marginLeft: '3%', height: 30 }}>
                    <SquareRadio text="Light" />
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: '3%', height: 30 }}>
                    <SquareRadio text="Auto" />
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: '3%' }}>
                    <SquareRadio text="Dark" />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Font size</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '3%' }}>Adjust how would you like Docare to appear.</Text>
                <Collapsible1 text="Select"/>
            </ScrollView>
        </View>
    )
}