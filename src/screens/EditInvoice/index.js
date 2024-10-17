import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { previewPayment } from "../../assets/Data";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";

export default function EditInvoice({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent:"space-between" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Edit Invoice</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", borderWidth:1, borderColor:colors.white, padding:5, paddingLeft:10, paddingRight:10, borderRadius:50}}>
                        <Text style={{ color: colors.white, fontSize: 12, fontFamily: 'Gilroy-Medium'}}>Update</Text>
                        <Image source={require('../../assets/images/update.png')} style={{ height: 14, width: 14, marginLeft:'2%' }} />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flexDirection: 'row', width: "16%", justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EditPayment')}>
                        <Image source={require('../../assets/images/addAcc.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View> */}
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '90%', marginTop: '5%' }}>
                    <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16, alignSelf: 'flex-end' }} />
                </TouchableOpacity>
                <Text style={{ width: '90%', textAlign: 'right', marginTop: "2%", fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Date: <Text style={{ color: colors.darkGrey }}>08 May 2025</Text></Text>
                <Text style={{ width: '90%', textAlign: 'right', marginTop: "2%", fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Due Date: <Text style={{ color: colors.darkGrey }}>08 May 2025</Text></Text>
                <View style={{ width: '90%', flexDirection: 'row', marginTop: "5%", alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.white, elevation: 5, borderRadius: 8, padding: "3%" }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>From:</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Dental Clinic</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>+1 459883886</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>To:</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('PatientDetail')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: '2%', paddingLeft: '5%', paddingRight: "5%", borderRadius: 3, borderColor: colors.blue }}>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Add</Text>
                                <Image source={require('../../assets/images/blueAdd.png')} style={{ height: 12, width: 12 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Alex Morgon</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>+1 459883886</Text>
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: 'center', marginLeft: "10%" }}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={previewPayment}
                        renderItem={({ item }) => (
                            <View style={{ width: '90%', alignItems: "center", marginTop: '5%', elevation: 5, backgroundColor: colors.white, padding: "3%", borderRadius: 8 }}>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{item.name}</Text>
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Item Price: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>4000</Text></Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Quantity: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>02</Text></Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Amonut: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>5000</Text></Text>
                            </View>
                        )} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <Button2 onPress={() => navigation.navigate('AddInvoice')} Text="Add Item" image={<Image source={require('../../assets/images/blueAdd.png')} style={{ height: 24, width: 24 }} />} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.white, elevation: 5, marginTop: '5%', paddingBottom: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Currency</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>USD ($)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Sub Total:</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>$445</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Discount:</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>$24</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Tax:</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>$6.4</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Grand Total:</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginTop: '2%' }}>$4000</Text>
                    </View>
                    <View style={{ width: '90%', alignItems: "center", marginTop: '5%', elevation: 5, backgroundColor: colors.white, padding: "3%", borderRadius: 8 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Notes</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '2%' }}>Thank you for your business. We hope to work with you again soon. You can Pay yout invoice online at avijo.example.in/payments</Text>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                        <Button1 Text="Generate to payment" onPress={()=>navigation.navigate('GeneratePayment')}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}