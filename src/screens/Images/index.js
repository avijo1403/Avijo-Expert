import React from "react";
import HeaderItem3 from "../../components/HeaderItem3";
import { FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import Button1 from "../../components/Button1";
import { colors } from "../../Theme/GlobalTheme";
import { medicineData } from "../../assets/Data";


export default function Images({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="PRESCRIPTION UPLOAD" right={
                <TouchableOpacity style={{ marginLeft: "50%" }}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>7+</Text>
                    </View>
                    <Image source={require('../../assets/images/whiteNoti.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
               <FlatList
               style={{width:'100%'}}
               contentContainerStyle={{alignItems:'center'}}
               data={medicineData}
               renderItem={({item})=>(
                <View style={{ marginTop: '5%', height: 125, width: 136, borderRadius:8 }}>
                    <TouchableOpacity style={{ position: 'absolute', zIndex: 2, alignSelf: 'flex-end', marginRight: '2%', marginTop: '2%' }}>
                        <Image source={require('../../assets/images/redCross.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/prescription2.png')} style={{ height: 125, width: 136, borderRadius:8 }} />
                </View>
                )}/>
                </View>
                <View style={{ width: "90%", height: 1, backgroundColor: colors.grey, marginTop: "10%" }} />
                <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop: "10%" }} />
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 18, marginTop: '3%' }}>Drag your image here</Text>
                <Text style={{ fontFamily: 'Gilroy-Medium', color: colors.grey, fontSize: 12, marginTop: '3%' }}>(Only *JPEG and *PNG images will be accepted)</Text>
                <View style={{ width: "100%", alignItems: 'center', marginTop: "10%", marginBottom: "5%" }}>
                    <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: "3%" }} />} />
                </View>
            </ScrollView>
        </View>
    )
}