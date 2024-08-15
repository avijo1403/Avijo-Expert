import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { medicine } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function PatientDetail({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="Patients" right={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24, marginLeft:'50%' }} />} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', marginLeft: "10%" }}>
                    <FlatList
                        style={{ width: "100%" }}
                        data={medicine}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('EditAppointment')} style={{ width: '90%', backgroundColor: colors.lightgrey, borderRadius: 12, marginTop: "5%", padding: "5%"  }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey}}>{item.name}</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, }}>example123@gmail.com</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                <TouchableOpacity style={{ width: "90%", alignItems: "flex-end", marginTop: '3%' }}>
                    <Text style={{ color: colors.blue, textDecorationLine: 'underline', fontSize: 14, fontFamily: 'Gilroy-SemiBold' }}>Veiw all</Text>
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: 'center', marginTop: "10%", marginBottom: "5%" }}>
                    <Button1 Text="Add" onPress={()=>navigation.navigate('Invoices')} image={<Image source={require('../../assets/images/whiteAdd.png')} style={{ height: 24, width: 24, marginLeft: "1%" }} />} />
                </View>
            </ScrollView>
        </View>
    )
}