import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { dashboardData, medicineData, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import ToggleSwitch from "toggle-switch-react-native";

export default function NewService({ navigation }) {

    const [active, setActive] = useState(false);

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="New Service" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <LoginInput text="Service name"/>
                <LoginInput text="Price (Rs.)" />
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: "90%", marginTop: '5%', paddingLeft: '2%' }}>Description</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: colors.grey, width: '90%', borderRadius: 3, marginTop: '3%', height: 90, fontSize: 16, fontFamily: "Gilroy-Medium", paddingLeft: wp('3%') }}
                    placeholder="Write Description here..."
                    textAlignVertical="top"
                    placeholderTextColor={colors.grey}
                />
                <View style={{marginTop:"5%", alignSelf:'flex-start', marginLeft:"5%", flexDirection:'row', alignItems:'center'}}>
                <ToggleSwitch
                    isOn={active}
                    onColor={colors.blue}
                    offColor={colors.lightgrey}
                    thumbOnStyle={{ backgroundColor: colors.white }}
                    thumbOffStyle={{ backgroundColor: colors.white }}
                    size="small"
                    onToggle={() => setActive(!active)}
                />
                <Text style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey, paddingLeft:"3%"}}>{active ? 'Enable':'Disable'}</Text>
                </View>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '5%', marginRight: '1%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.lightRed, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    }
})