import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import SettingToggle from "../../components/SettingToggle";
import { colors } from "../../Theme/GlobalTheme";

export default function ProfileSetting({navigation}){

    return(
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="Profile Setting"/>
                <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                    <SettingToggle text="Online Consultation" subText="Learn more" subColor={colors.blue}/>
                    <SettingToggle text="Instant online consultation" subText="Learn more" subColor={colors.blue}/>
                    <SettingToggle text="Home Visit for Checkup" subText="Learn more" subColor={colors.blue}/>
                    <SettingToggle text="Family Doctor" subText="Learn more" subColor={colors.blue}/>
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