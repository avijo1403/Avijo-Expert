import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { TouchableOpacity } from "react-native";
import { activityList, doCareList, emailList } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";

export default function EmailAndNotiSettings({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={()=>navigation.goBack()} text="Email & notification" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey }}>Content channels</Text>
                {emailList.map((item) => (<TouchableOpacity onPress={() => item.to && navigation.navigate(item.to)} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{item.text}</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>))}
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey, marginTop:'10%' }}>Content channels</Text>
                {activityList.map((item) => (<TouchableOpacity onPress={() => item.to && navigation.navigate(item.to)} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{item.text}</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>))}
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey, marginTop:'10%' }}>Content channels</Text>
                {doCareList.map((item) => (<TouchableOpacity onPress={() => item.to && navigation.navigate(item.to)} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{item.text}</Text>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>))}
            </ScrollView>
        </View>
    )
}