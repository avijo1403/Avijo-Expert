import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { previewPayment } from "../../assets/Data";
import Button1 from "../../components/Button1";
import Collapsible1 from "../../components/Collapsible";

export default function EditPayment({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Edit Payment</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", borderWidth:1, borderColor:colors.white, padding:5, paddingLeft:10, paddingRight:10, borderRadius:50}}>
                        <Text style={{ color: colors.white, fontSize: 12, fontFamily: 'Gilroy-Medium'}}>Update</Text>
                        <Image source={require('../../assets/images/update.png')} style={{ height: 14, width: 14, marginLeft:'2%' }} />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flexDirection: 'row', width: "16%", justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/print.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/edit3.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View> */}
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ width: '90%', textAlign: 'right', marginTop: "5%", fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Invoice ID: #897612</Text>
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
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>To:</Text>
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
                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '23%', justifyContent: 'space-between' }}>
                                        <TouchableOpacity>
                                            <Image source={require('../../assets/images/blueEye.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../../assets/images/redBin.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../../assets/images/blackEdit.png')} style={{ height: 24, width: 24 }} />
                                        </TouchableOpacity>
                                    </View> */}
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Item Price: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>4000</Text></Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Quantity: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>02</Text></Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Amonut: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>5000</Text></Text>
                            </View>
                        )} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.white, elevation: 5, marginTop: '5%', paddingBottom: '5%' }}>
                    <View style={{ width: '90%', alignItems: "center", marginTop: '5%', elevation: 5, backgroundColor: colors.white, padding: "3%", borderRadius: 8 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Notes</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '2%' }}>Thank you for your business. We hope to work with you again soon. You can Pay yout invoice online at avijo.example.in/payments</Text>
                    </View>
                    <Collapsible1 heading="Change status" text="Pending" />
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: "space-between", marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '2%' }}>Paid By:</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '2%' }}>NHCF</Text>
                    </View>
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
                    <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '10%', marginRight: '1%', marginBottom: '0%' }}>
                        <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.lightRed, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Delete</Text>
                            <Image source={require('../../assets/images/redBin2.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                        </TouchableOpacity>
                        <View style={{ width: '52%', alignItems: 'center' }}>
                            <Button1 Text="Save" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />} />
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: "5%" }}>
                        <Button1 Text="Update" image={<Image source={require('../../assets/images/update.png')} style={{ height: 20, width: 20, marginLeft: 5 }} />} />
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
        backgroundColor: colors.white,
    },
    headerContainer: {
       flexDirection: 'row',
       width: '100%',
       padding: '5%',
       paddingTop: '10%',
       alignItems: 'center',
       justifyContent: 'space-between',
       backgroundColor: colors.blue,
   },
   headerText: {
       fontSize: 20,
       fontFamily: 'Gilroy-SemiBold',
       paddingLeft: '10%',
       color: colors.white,
   }
})