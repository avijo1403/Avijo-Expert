import React, { useState } from "react";
import { FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import { recordData } from "../../assets/Data";
import { YourComponent } from "../../components/Menu";
import { MenuTrigger } from "react-native-popup-menu";

export default function Records({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '5%', backgroundColor: colors.white, paddingTop: '10%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 14, width: 14, marginRight: '10%' }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Records</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/blackSearch.png')} style={{ height: 26, width: 26, }} />
                    <YourComponent />
                </View>
            </View>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', backgroundColor: colors.white, paddingTop: '2%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.grey, paddingLeft: 10, paddingRight: 10 }}>
                            <Image source={require('../../assets/images/testTube.png')} style={{ height: 14, width: 14, marginRight: '10%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 8, borderColor: colors.grey, paddingLeft: 10, paddingRight: 10, marginLeft: '5%' }}>
                            <Image source={require('../../assets/images/qr4.png')} style={{ height: 20, width: 20, marginRight: '10%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/filter2.png')} style={{ height: 20, width: 20, }} />
                        <Image source={require('../../assets/images/lines2.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={recordData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('MedicalRecordView')} style={{ backgroundColor: colors.white, width: '90%', borderRadius: 22, borderBottomRightRadius: 0, padding: '1%', paddingTop: '3%', alignItems: 'center', marginTop: '5%', alignSelf: 'center' }}>
                                <Image source={item.image} style={{ height: 180, width: '95%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} resizeMode="cover" />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', borderRadius: 14, backgroundColor: colors.white, padding: '5%', paddingBottom: '2%', justifyContent: 'space-between', paddingLeft: '2%' }}>
                                    <View style={{ marginLeft: '3%', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/flask2.png')} style={{ height: 20, width: 20 }} />
                                        <Text style={{ fontSize: 22, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>{item.text}</Text>
                                    </View>
                                    <Image source={require('../../assets/images/dots2.png')} style={{ height: 20, width: 20 }} />
                                </View>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', paddingBottom: '3%', marginLeft: '2%' }}>Upload on 15Oct 2024</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            </ScrollView>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello, this is a Modal!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.white,
    }
})