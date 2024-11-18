import React, { useState } from "react";
import HeaderItem3 from "../../components/HeaderItem3";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Button1 from "../../components/Button1";
import { colors } from "../../Theme/GlobalTheme";
import { medicineData } from "../../assets/Data";
import { FloatingAction } from "react-native-floating-action";


export default function Images({ navigation }) {
    const [column, setColumn] = useState(3);
    const [uploads, setUploads] = useState(false);
    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Images" right2={
                <TouchableOpacity style={{ borderWidth: 1, borderColor: colors.white, padding: 5, borderRadius: 50, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={styles.number}>Save</Text>
                </TouchableOpacity>} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        numColumns={column}
                        data={medicineData}
                        renderItem={({ item }) => (
                            <View style={{ marginTop: '5%', marginLeft: '1%', height: 110, width: '32%', borderRadius: 8 }}>
                                <TouchableOpacity style={{ position: 'absolute', zIndex: 2, alignSelf: 'flex-end', marginRight: '2%', marginTop: '2%' }}>
                                    <Image source={require('../../assets/images/redCross.png')} style={{ height: 20, width: 20 }} />
                                </TouchableOpacity>
                                <Image source={require('../../assets/images/prescription2.png')} resizeMode="cover" style={{ height: 110, width: '100%', borderRadius: 8 }} />
                            </View>
                        )} />
                </View>
                <View style={{ width: "90%", height: 1, backgroundColor: colors.grey, marginTop: "5%" }} />
                {/* <Image source={require('../../assets/images/upload1.png')} style={{ height: 40, width: 40, marginTop: "10%" }} />
                <Text style={{ fontFamily: 'Gilroy-SemiBold', color: colors.black, fontSize: 18, marginTop: '3%' }}>Drag your image here</Text>
                <Text style={{ fontFamily: 'Gilroy-Medium', color: colors.grey, fontSize: 12, marginTop: '3%' }}>(Only *JPEG and *PNG images will be accepted)</Text> */}
                {/* <View style={{ width: "100%", alignItems: 'center', marginTop: "10%", marginBottom: "5%" }}>
                    <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: "3%" }} />} />
                </View> */}
            </ScrollView>
            {!uploads && <FloatingAction
                color={colors.blue}
                onPressMain={() => {
                    setUploads(true)
                }}
                overlayColor='rgba(0,0,0,0)'
            />}
            {uploads && <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.lightgrey }}>
                <TouchableOpacity style={{width:'100%'}} onPress={()=>setUploads(!uploads)}>
                <Text style={{ padding: '5%', fontSize: 22, color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Uploads</Text>
                </TouchableOpacity>
                <View style={{ height: 1, width: '90%', backgroundColor: colors.lightgrey }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', alignSelf: 'center', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '30%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/gallery.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '10%' }}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '30%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '10%' }}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '30%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '10%' }}>Document</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    numberContainer: {
        height: 12,
        width: 12,
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 13,
        position: 'absolute',
        zIndex: 2,
        marginLeft: 15,
        alignItems: 'center'
    },
    number: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        color: colors.white,
        // paddingTop: 2,
        // paddingLeft: 2
    }
});