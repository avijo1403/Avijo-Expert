import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";

export default function PrescriptionSave({navigation}) {


    const SaveItem = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: '5%', borderWidth: 1, borderColor: colors.grey, padding: 10, borderRadius: 12 }}>
                <Image source={props.image} style={{ height: 24, width: 24 }} />
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, marginLeft: '5%' }}>{props.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: '5%', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '10%', marginBottom: '10%' }}>
                <Image source={require('../../assets/images/whatsapp2.png')} style={{ height: 26, width: 26 }} />
                <View style={{ width: '80%', marginLeft: '3%' }}>
                    <Text style={{ fontSize: 17, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Prescription Saved Successfully.</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', marginTop: '2%' }}>+91 4759573857537</Text>
                </View>
            </View>
            <SaveItem image={require('../../assets/images/greenPin.png')} text="Send Attachment" onPress={()=>navigation.navigate('Images')} />
            <SaveItem image={require('../../assets/images/greenPrint.png')} text="Print" />
            <SaveItem image={require('../../assets/images/greenCloud.png')} text="Download" />
            <SaveItem image={require('../../assets/images/greenSend.png')} text="Send Via Own Whatsapp" />
            <SaveItem image={require('../../assets/images/greenLink.png')} text="Send Payment Link" />
            <SaveItem image={require('../../assets/images/greenBill.png')} text="Bill Patient" />
            <SaveItem image={require('../../assets/images/greenChrome.png')} text="Send Google Review Link" />
            <SaveItem image={require('../../assets/images/greenEdit.png')} text="Request Vitals" />
        </ScrollView>
    )
}
