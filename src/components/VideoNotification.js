import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../Theme/GlobalTheme';
import { useNavigation } from '@react-navigation/native';

const VideoNotification = ({ visible, onClose }) => {

    const navigation = useNavigation();

    return (
        <Modal
            animationType="default"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Incoming Call</Text>
                    <View style={{ borderWidth: 3, borderRadius: 100, borderColor: colors.darkGrey, marginTop: '5%' }}>
                        <View style={{ borderWidth: 2, borderRadius: 100, borderColor: colors.grey }}>
                            <View style={{ borderWidth: 1.5, borderRadius: 100, borderColor: colors.lightgrey }}>
                                <Image source={require('../assets/images/dash1.png')} style={{ height: 72, width: 72, borderRadius: 100 }} />
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '5%' }}>Ananya</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: '3%' }}>Dermatologist</Text>
                    <View style={{ width: "92%", alignItems: "center", justifyContent: 'space-between', flexDirection: 'row', marginTop: '10%' }}>
                        <TouchableOpacity onPress={onClose} style={{ height: 42, width: '46%', backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center', borderRadius: 80 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Reject</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('VideoChat')} style={{ height: 42, width: '46%', backgroundColor: colors.parrot, alignItems: 'center', justifyContent: 'center', borderRadius: 80 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: '45%'
    },
    modalText: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Gilroy-Medium',
        color: colors.black,
    },
});

export default VideoNotification;
