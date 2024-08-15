import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { dashboardData, medicineData, wp } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function Medicines({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Medicine" showSearch={true} right={<Image source={require('../../assets/images/addAcc.png')} style={{ height: 25, width: 25 }} />}  onRightPress={()=>navigation.navigate('NewMedicine')} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={medicineData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('EditMedicine')} style={{ width: '90%', alignItems: 'center', borderWidth: 1, padding: '2%', borderRadius: 8, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, marginTop: '5%', }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'flex-start',
                            }}>
                                <Image source={item.image} style={{ height: 56, width: 56, borderRadius: 3 }} />
                                <View style={{ marginLeft: '3%', width: '78%' }}>
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <View style={{ width: "80%" }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '125%', justifyContent: 'space-between', marginLeft: '0%' }}>
                                                <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '2%' }}>{item.name}</Text>
                                                {/* <View style={{width:'22%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={()=>navigation.navigate('EditMedicine')}>
                                                        <Image source={require('../../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                                                    </TouchableOpacity>
                                                    </View> */}
                                            </View>
                                            <View style={{ flexDirection: 'row', width: '50%', paddingLeft:'1%' }}>
                                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%' }}>status: </Text>
                                                <Text style={{ fontFamily: 'Gilroy-Medium', color: item.stock === 0 ? colors.red : colors.green, fontSize: 10, padding: 3, backgroundColor: item.stock === 0 ? colors.lightRed : colors.lightGreen, borderRadius: 10, marginLeft: '2%' }}> {item.stock === 0 ? 'Out of Stock' : 'Available'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: wp('80%'), color: colors.black, textAlign: 'left', marginTop: '2%', marginLeft: '2%' }}>InStock:<Text style={{ color: colors.grey }}> {item.stock}</Text></Text>
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '2%', width:wp('10%')}}>Price:</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, textAlign: 'left', width:wp('20%')}}> {item.price}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: '2%' }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '3%', width:wp('17%') }}>Measure:</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, textAlign: 'left', width:wp('20%') }}> {item.measure}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )} />
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="Export" image={<Image source={require('../../assets/images/export.png')} style={{ height: 24, width: 24, marginLeft: '2%' }} />} />
                </View>
            </ScrollView>
        </View>
    )
}