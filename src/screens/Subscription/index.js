import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";

export default function Subscription({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Subcription & Billing" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Space subcriptions</Text>
                <TextInput
                    placeholder="You are currently not a member of any space."
                    placeholderTextColor={colors.grey}
                    style={{ width: '90%', fontSize: 14, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Payment methods</Text>
                <TextInput
                    placeholder="You have no saved payment method."
                    placeholderTextColor={colors.grey}
                    style={{ width: '90%', fontSize: 14, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Billing history</Text>
                <TextInput
                    placeholder="You have no billing history."
                    placeholderTextColor={colors.grey}
                    style={{ width: '90%', fontSize: 14, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Information & resources</Text>
                <TextInput
                    placeholder="Help center"
                    placeholderTextColor={colors.blue}
                    style={{ width: '90%', fontSize: 14, fontFamily: 'Gilroy-Medium', borderBottomWidth: 1, borderColor: colors.grey, color: colors.black }}
                />
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