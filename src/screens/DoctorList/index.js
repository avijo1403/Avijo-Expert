import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { appData, docList } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";

export default function DoctorList({navigation}) {

    
    const [column, setColumn] = useState(2);

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Doctors" showNoti={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <FlatList
                        style={{ width: '90%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={docList}
                        numColumns={column}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => { item.to && navigation.navigate(item.to) }} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', justifyContent: 'center', borderWidth: 1, borderRadius: 40, width: '48%', borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 3, marginTop: '5%', marginLeft: index % column !== 0 && '3%' }}>
                                <Image source={item.image} style={{ height: 24, width: 24 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingLeft: '3%', width: '85%', paddingLeft: '5%', textAlign: 'left' }}>{item.title}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('PersonnelInfoDoc') }} style={{ flexDirection: 'row', alignItems: 'center', padding: '5%', justifyContent: 'center', borderWidth: 1, borderRadius: 40, width: '43%', borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 3, marginTop: '5%', marginLeft: '3%', alignSelf: 'flex-start', marginLeft: '5%' }}>
                    <Image source={require('../../assets/images/changePass.png')} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingLeft: '3%', width: '85%', paddingLeft: '5%', textAlign: 'left' }}>Change Password</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}