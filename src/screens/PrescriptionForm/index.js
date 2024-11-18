import React, { useRef, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import VitalInput from "../../components/VitalInput";
import SearchItem from "../../components/SearchItem";
import PrescriptionSearch from "../../components/PrescriptionSearch";
import { actions, defaultActions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import Collapsible3 from "../../components/Collapsible3";
import Collapsible4 from "../../components/Collapsible4";

export default function PrescriptionForm({ navigation }) {

    const [article, setArticle] = useState("");
    const RichText = useRef();

    const onChangeContent = (text) => {
        debouncedSetArticle(text);
    };


    function onPressAddImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image Picker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;

                // Convert image to base64 format
                RNFS.readFile(imageUri, 'base64')
                    .then(base64Data => {
                        const imageBase64 = `data:image/jpeg;base64,${base64Data}`;

                        // Insert base64 image into the RichEditor
                        const imageHtml = `<img src="${imageBase64}" style="width: 90%; height: 150px;" />`;
                        RichText.current?.insertHTML(imageHtml);
                    })
                    .catch(err => {
                        console.log('Error converting image to base64:', err);
                    });
            }
        });
    }

    return (
        <View style={styles.container}>
            {/* <HeaderItem2 onPress={() => navigation.goBack()} text="Prescription Pad" right={
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('PrescriptionSave')}>
                        <Image source={require('../../assets/images/pencil.png')} style={{ height: 23, width: 23 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PrescriptionDetail')} style={{ marginLeft: '8%' }}>
                        <Image source={require('../../assets/images/movie.png')} style={{ height: 23, width: 23 }} />
                    </TouchableOpacity>
                </View>
            } /> */}
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: '5%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>Prescription Pad</Text>
                </View>
                <TouchableOpacity style={{ padding: 5, borderRadius: 50, borderWidth: 1, borderColor: colors.blue, alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Create</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 56, width: 56 }} />
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold' }}>Imtiyaz</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                            <Text style={{ fontSize: 14, color: colors.black, fontFamily: 'Gilroy-Medium' }}> 6364766400</Text>
                            <Image source={require('../../assets/images/down-arrow.png')} style={{ height: 16, width: 16, marginLeft: '3%' }} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                        <Image source={require('../../assets/images/vitals.png')} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Vitals</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <VitalInput text="Body Temperature" rightText="F" />
                        <VitalInput text="Body height" rightText="Cms" />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <VitalInput text="Body mass index" rightText="kg/m2" />
                        <VitalInput text="Body weight" rightText="Kg/s" />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/symptoms.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Symptoms</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ width: '50%', alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                        <PrescriptionSearch placeholder="Search symptoms" />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/diagnosis.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Diagnosis</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ width: '50%', alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                        <PrescriptionSearch placeholder="Search symptoms" />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/medication.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Medications</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ width: '50%', alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                        <PrescriptionSearch placeholder="Search symptoms" />
                    </View>
                    <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>
                        <Image source={require('../../assets/images/blackInfo.png')} style={{ height: 16, width: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '3%' }}>Delivery Pincode:</Text>
                        <TouchableOpacity style={{ padding: 3, borderWidth: 1, borderRadius: 50, borderColor: colors.torquish, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%' }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.torquish }}>Pincode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 3, borderWidth: 1, borderRadius: 50, borderColor: colors.black, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/again.png')} style={{ height: 12, width: 12 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: 5 }}>Check</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/medication.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Order via</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ width: '50%', alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                        {/* <PrescriptionSearch placeholder="Search symptoms" /> */}
                        <Collapsible4 content={["avijo", "prakhar pharmacy", "Brothers laboratory"]} text="Select Facility"/>
                    </View>
                    {/* <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>
                        <Image source={require('../../assets/images/blackInfo.png')} style={{ height: 16, width: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '3%' }}>Delivery Pincode:</Text>
                        <TouchableOpacity style={{ padding: 3, borderWidth: 1, borderRadius: 50, borderColor: colors.torquish, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%' }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.torquish }}>Pincode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 3, borderWidth: 1, borderRadius: 50, borderColor: colors.black, marginLeft: '3%', paddingLeft: '5%', paddingRight: '5%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/again.png')} style={{ height: 12, width: 12 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: 5 }}>Check</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/notes.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Notes</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <TextInput style={{ fontSize: 12, borderWidth: 1, alignSelf: 'flex-start', marginTop: '5%', height: 36, padding: 2, borderRadius: 5, width: '80%', paddingLeft: 10, borderColor: colors.lightgrey, marginLeft: '5%' }} placeholder="Notice for patient(treatment/surgical/others)" />
                    <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>
                        <Image source={require('../../assets/images/greenInfo.png')} style={{ height: 16, width: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '3%' }}>These will not be printed</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/followup.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Follow up</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center', marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '85%', height: 28, borderRadius: 5, borderColor: colors.lightgrey, alignSelf: 'flex-start', marginLeft: '5%', justifyContent: 'space-between', borderWidth: 1 }}>
                            <TextInput style={{ fontSize: 12, alignSelf: 'flex-start', padding: 2, width: '80%', paddingLeft: 10, }} placeholder="60 Days" />
                            <Image source={require('../../assets/images/cross3.png')} style={{ height: 16, width: 16 }} />
                        </View>
                        <Image source={require('../../assets/images/calendar6.png')} style={{ height: 16, width: 16, marginLeft: '3%' }} />
                    </View>
                    <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Sunday, 12 May 24</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/images/greenTick.png')} style={{ height: 12, width: 12 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: 5 }}>Auto Fill from Rx</Text>
                        </View>
                    </View>
                    <TextInput style={{ fontSize: 12, alignSelf: 'flex-start', padding: 2, width: '80%', paddingLeft: 10, width: '90%', borderWidth: 1, padding: 5, borderRadius: 6, height: 120, borderColor: colors.grey, alignSelf: 'center', marginTop: '5%' }} textAlignVertical="top" placeholder="Add note" />
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: colors.white, marginTop: '5%', padding: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/followup.png')} style={{ height: 24, width: 24 }} />
                            <Text style={{ fontSize: 20, color: colors.black, fontFamily: 'Gilroy-SemiBold', marginLeft: '5%' }}>Follow up</Text>
                        </View>
                        <Image source={require('../../assets/images/greenFile.png')} style={{ height: 16, width: 46 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center', marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '85%', height: 28, borderRadius: 5, borderColor: colors.lightgrey, alignSelf: 'flex-start', marginLeft: '5%', justifyContent: 'space-between', borderWidth: 1 }}>
                            <TextInput style={{ fontSize: 12, alignSelf: 'flex-start', padding: 2, width: '80%', paddingLeft: 10, }} placeholder="60 Days" />
                            <Image source={require('../../assets/images/cross3.png')} style={{ height: 16, width: 16 }} />
                        </View>
                        <Image source={require('../../assets/images/calendar6.png')} style={{ height: 16, width: 16, marginLeft: '3%' }} />
                    </View>
                    <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Sunday, 12 May 24</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/images/greenTick.png')} style={{ height: 12, width: 12 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: 5, marginRight: '2%' }}>Auto Fill from Rx</Text>
                            <Image source={require('../../assets/images/eye.png')} style={{ height: 12, width: 12 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: 5 }}>hi</Text>
                        </View>
                    </View>
                    <KeyboardAvoidingView style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center', marginTop: '5%', }}>
                        <RichEditor
                            ref={RichText}
                            showsVerticalScrollIndicator={false}
                            style={{ width: '90%' }}
                            containerStyle={{ alignItems: 'center' }}
                            placeholder="Start Writing Here"
                            // onChange={(text) => setArticle(text)}
                            onChange={onChangeContent}
                            initialContentHTML={article}
                        />
                        <RichToolbar
                            editor={RichText}
                            actions={[
                                actions.insertImage,
                                ...defaultActions,
                            ]}
                            iconMap={{
                                [actions.insertImage]: () => (
                                    <TouchableOpacity onPress={onPressAddImage}>
                                        <Image
                                            source={require("../../assets/images/image.png")}  // Add your image icon here
                                            style={{ height: 20, width: 20 }}
                                        />
                                    </TouchableOpacity>
                                ),
                            }}
                            style={{ marginTop: '10%' }}
                        />
                    </KeyboardAvoidingView>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', marginTop: '5%' }}>
                        <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: colors.torquish }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: 5, marginRight: '2%' }}>Advised Home isolation and treatment of now. Warning signs explained and revew sos</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', marginTop: '5%' }}>
                        <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: colors.torquish }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: 5, marginRight: '2%' }}>Steaming gargling</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', marginTop: '5%' }}>
                        <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: colors.torquish }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: 5, marginRight: '2%' }}>Dr. whatsapp number 72587585996</Text>
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
        backgroundColor: colors.background,
    },
})