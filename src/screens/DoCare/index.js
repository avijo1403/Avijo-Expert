import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

export default function DoCare({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem notiPress={() => navigation.navigate('Notification')} text="avijo" onRightPress={() => navigation.navigate('Account')} image={<Image source={require('../../assets/images/profile3.png')} style={{ height: 36, width: 36 }} showSearch={true} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'start' }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                    <View style={{ width: '80%' }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddQuestion')}>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: colors.darkGrey, paddingLeft: '5%', borderWidth: 1, borderColor: colors.lightgrey, padding: 5, width: '90%', borderRadius: 50, marginLeft: '5%' }}>What do you want to ask or share?</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginLeft: '5%', marginTop: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                <Image source={require('../../assets/images/question.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Ask</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                <Image source={require('../../assets/images/ask.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Answer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                <Image source={require('../../assets/images/post2.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                            <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/appDoc.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                            <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Sunil Puraswani</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>. Follow</Text>
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Aug 12</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/cross2.png')} style={{ height: 10, width: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>How do I build a social media app: A Comprehensive Guide? There are so many freelancer who can help you with that</Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                    <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: "5%" }}>
                                    <Image source={require('../../assets/images/chat.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/available3.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                            <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Life Insurance Corporation</Text>
                                    {/* <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>. Follow</Text> */}
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Sponsored</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/cross2.png')} style={{ height: 10, width: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>New jeevan Akshay Lic’s</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>An immediate annuity paln that can be purchase by payinga lump ammount.</Text>
                        <Image source={require('../../assets/images/doCare2.png')} style={{ width: '95%', height: 90, borderRadius: 5, marginTop: '5%' }} />
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                    <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: "5%" }}>
                                    <Image source={require('../../assets/images/chat.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '5%', borderBottomWidth: 1, paddingBottom: '5%', borderColor: colors.grey }}>
                        <Image source={require('../../assets/images/question2.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Questions for you</Text>
                    </View>
                    <View style={{ width: '90%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%' }}>
                        <View style={{ width: '95%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "95%" }}>How has the spread of tick-borne viruses in Japan evolved over the X years, and what new infectious diseases have been detected recently?</Text>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/cross2.png')} style={{ height: 10, width: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                    <Image source={require('../../assets/images/question.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                    <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Ask</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                    <Image source={require('../../assets/images/ask.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                    <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Answer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                    <Image source={require('../../assets/images/post2.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                    <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Post</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '15%', justifyContent: 'space-between', marginTop: '4%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 20, width: 20 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%', justifyContent: 'space-between' }}>
                        <View style={{ width: '70%', alignItems: 'center' }}>
                            <View style={{ width: '95%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "95%" }}>Add 5 topics you know about</Text>
                            </View>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "95%", marginTop: '5%' }}>You ‘ll get better questions if you add more specific topics.</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                                <TouchableOpacity style={{ alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.white, padding: '2%', borderWidth: 1, borderColor: colors.blue, borderRadius: 50, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: colors.blue }}>Create</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image source={require('../../assets/images/notebook.png')} style={{ height: 72, width: 72 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}