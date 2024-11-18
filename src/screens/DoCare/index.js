import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { getData, hp, wp } from "../../assets/Data";
import { FloatingAction } from "react-native-floating-action";

export default function DoCare({ navigation }) {
    const [id, setId] = useState();
    const [select, setSelect] = useState(1);

    useEffect(() => {
        getData('id').then(id => setId(id));
    }, []);

    const handleSelect = (no) => {
        setSelect(no);
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', padding:5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingTop: '4%' }}>
                <Text style={{ fontSize: 28, fontFamily: 'akuina-bold-slanted', color: '#3CA2A5', paddingLeft: '5%', }}>D<Text style={{ fontSize: 22 }}>OCARE</Text></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: '3%' }}>
                    <Image source={require('../../assets/images/blackSearch.png')} style={{ height: 24, width: 24, marginRight: 10, }} />
                    {/* <Image source={require('../../assets/images/addSquare.png')} style={{ height: 24, width: 24, }} /> */}
                </View>
            </View>
            <View horizontal={true} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '100%', justifyContent: 'space-between', borderBottomWidth: 0, }}>
                <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { borderBottomWidth: select === 1 ? 3 : 0, marginLeft: '5%' }]}>
                    <Text style={{
                        fontFamily: 'Gilroy-SemiBold', fontSize: 18, color: colors.black, textAlign: 'center'
                    }}>For you</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { borderBottomWidth: select === 2 ? 3 : 0 }]}>
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 18, color: colors.black, textAlign: 'center' }}>Followings</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {/* <View style={{ flexDirection: 'row', alignItems: 'start', backgroundColor: colors.white, width: '100%', paddingTop: '7%', padding: '5%' }}>
                    <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                    <View style={{ width: '80%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddQuestion')}>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: colors.darkGrey, paddingLeft: '5%', borderWidth: 1, borderColor: colors.lightgrey, padding: 5, width: '90%', borderRadius: 50, marginLeft: '5%' }}>What do you want to ask or share?</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'flex-start', marginLeft: '5%', marginTop: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '35%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                <Image source={require('../../assets/images/question.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '35%', backgroundColor: colors.lightgrey, padding: '2%', marginLeft: '5%' }}>
                                <Image source={require('../../assets/images/ask.png')} sty
                                    le={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Answer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '35%', backgroundColor: colors.lightgrey, padding: '2%', marginLeft: '5%' }}>
                                <Image source={require('../../assets/images/share2.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
                <View style={styles.container}>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                            <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                        </View>
                    </View> */}
                    <View style={{ width: '90%', alignItems: 'center', elevation: 5, backgroundColor: colors.white, borderRadius: 5, marginTop: '3%', padding: '3%', }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                                <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                <View style={{ width: '80%', paddingLeft: '5%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '65%' }}>Sunil Puraswani</Text>
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '35%' }}>. Follow</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "80%" }}>Aug 12</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/dot3.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>How do I build a social media app: A Comprehensive Guide?</Text>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '0%', paddingLeft: '2%' }}>There are so many freelancer who can help you with that</Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 4, borderWidth: 1, borderColor: colors.grey, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/thumbUp.png')} style={{ height: 18, width: 18, marginRight: '5%' }} />
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>400K</Text>
                                    <Image source={require('../../assets/images/thumbDown.png')} style={{ height: 18, width: 18, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: "5%" }}>
                                    <Image source={require('../../assets/images/send2.png')} style={{ height: 22, width: 22, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                {/* <TouchableOpacity>
                                    <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                                </TouchableOpacity> */}
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/favorite.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Comments <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 10 }}>40K</Text></Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: "3%" }}>
                            <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                            <View style={{ width: '85%', paddingLeft: '3%', }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%' }}>Brilliant use of renaming to get videos back in the algorithm.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
                                <Image source={require('../../assets/images/available3.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>Life Insurance Corporation</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Sponsored</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/dot3.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>New jeevan Akshay Lic’s</Text>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '0%', paddingLeft: '2%' }}>An immediate annuity paln that can be purchase by payinga lump ammount.</Text>
                        <Image source={require('../../assets/images/doCare2.png')} style={{ width: '95%', height: 90, borderRadius: 5, marginTop: '5%' }} />
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2%', width: '70%', borderColor: colors.blue, borderWidth: 1, borderRadius: 50, marginTop: '5%', marginBottom: '2%' }}>
                            <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, paddingLeft: '5%' }}>Learn More</Text>
                            <Image source={require('../../assets/images/blueEdit.png')} style={{ height: 12, width: 12, marginRight: '5%' }} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 4, borderWidth: 1, borderColor: colors.grey, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/thumbUp.png')} style={{ height: 18, width: 18, marginRight: '5%' }} />
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>400K</Text>
                                    <Image source={require('../../assets/images/thumbDown.png')} style={{ height: 18, width: 18, marginLeft: '5%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: "5%" }}>
                                    <Image source={require('../../assets/images/send2.png')} style={{ height: 22, width: 22, marginLeft: '5%' }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/favorite.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, width: '100%', padding: '3%' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                            <View style={{ width: '80%' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddQuestion')}>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: colors.darkGrey, paddingLeft: '5%', borderWidth: 1, borderColor: colors.lightgrey, padding: 8, width: '100%', borderRadius: 50, marginLeft: '5%' }}>Add a comment....</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.white, marginTop: '5%', marginBottom: '5%', padding: '2%' }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: '5%', borderBottomWidth: 1, paddingBottom: '5%', borderColor: colors.grey }}>
                            <Image source={require('../../assets/images/question2.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Questions for you</Text>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%' }}>
                            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "95%" }}>How has the spread of tick-borne viruses in Japan evolved over the X years, and what new infectious diseases have been detected recently?</Text>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/dot3.png')} style={{ height: 20, width: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%' }}>No answer yet . Last followed 14m</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                        <Image source={require('../../assets/images/answer.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                        <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '400', color: colors.darkGrey }}>Answer</Text>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                        <Image source={require('../../assets/images/follow2.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                        <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '400', color: colors.darkGrey }}>Follow</Text>
                                    </TouchableOpacity> */}
                                    {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                        <Image source={require('../../assets/images/pass.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                        <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '400', color: colors.darkGrey }}>Pass</Text>
                                    </TouchableOpacity> */}
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
                                    {/* <TouchableOpacity>
                                        <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                                    </TouchableOpacity> */}
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
                </View>
            </ScrollView>
            <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    navigation.navigate('AddQuestion')
                }}
                overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    tabContainer: {
        // borderWidth: 1,
        borderColor: colors.blue,
        padding: hp(1.8),
        marginRight: wp(3),
        width: '45%'
    }
})