import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import { appData, hp, wp } from "../../assets/Data";

export default function Main({ navigation }) {

    const [column, setColumn] = useState(3);

    const Apps = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <FlatList
                        style={{ width: '90%' }}
                        contentContainerStyle={{ alignItems: 'flex-start' }}
                        data={appData}
                        numColumns={column}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => { item.to && navigation.navigate(item.to) }} style={{ flexDirection: 'column', alignItems: 'center', padding: '0%', justifyContent: 'center', borderWidth: 1, borderRadius: 8, width: wp(28), height: hp(15), borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 3, marginTop: '5%', marginLeft: index % column !== 0 && '3%' }}>
                                <Image source={item.image} style={{ height: 40, width: 40 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%', width: '85%', paddingLeft: '5%', textAlign: 'left', textAlign: 'center', paddingTop: '5%' }}>{item.title}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem notiPress={() => navigation.navigate('Notification')} text="avijo" image={<Image source={require('../../assets/images/profile3.png')} style={{ height: 36, width: 36 }} showSearch={true} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Apps />
            </ScrollView>
        </View>
    )
}