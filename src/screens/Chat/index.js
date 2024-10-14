import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from './style';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';
import HeaderItem3 from '../../components/HeaderItem3';
import { hp, wp } from '../../assets/Data';

const Chat = ({ navigation, route }) => {

    const userId = route?.params?.userId;
    const name = route?.params?.name;
    const doctorId = route?.params?.doctorId;

    const [messages, setMessages] = useState([
        { id: 1, sender: 'You', text: 'Hello Emilli I hope you remember about your appoinment today with us.', time: '12:15 pm' },
        { id: 2, sender: 'Jane', text: 'Hello Doctor, Yes i remember. I will be there right on time', time: '12:15 pm' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const textInputRef = useRef(null);

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                { id: prevMessages.length + 1, sender: 'You', text: newMessage },
            ]);

            setNewMessage('');
        }
    };

    useEffect(() => {
        console.log('data:', doctorId, userId, name);
    }, [])

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: '90%' }}>
                <View style={{ backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', marginLeft: '5%', borderRadius: 8 }}>
                    <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 16, width: 16 }} />
                    <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', padding: 10, marginLeft: '10%', borderRadius: 8 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.white, paddingRight: '3%' }}>John Doe</Text>
                        <Image source={require('../../assets/images/star2.png')} style={{ height: 14, width: 14, marginLeft: '2%' }} />
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/dotBlue.png')} style={{ height: 20, width: 4.5 }} />
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={styles.messageContainer}
                showsVerticalScrollIndicator={false}
                ref={scrollView => scrollView?.scrollToEnd({ animated: true })}
            >
                {/* <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '10%' }}>
                    <Image source={require('../../assets/images/profile4.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
                    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: wp('80%'), textAlign: 'left', marginTop: '4%' }}>Micheal</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>example@gmail.com</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: wp('80%'), textAlign: 'left', marginTop: '2%' }}>+1 459883886</Text>
                    </TouchableOpacity>
                </View>
                
                */}
                {messages.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.message,
                            message.sender === 'You' ? styles.sentMessage : styles.receivedMessage,
                        ]}
                    >
                        <Text style={[styles.messageText, { color: message.sender === 'You' ? colors.black : colors.white }]}>{message.text}</Text>
                        <Text style={[styles.messageSender, { color: message.sender === 'You' ? colors.blue : colors.white }]}>{message.time}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', alignSelf: 'center',  marginBottom:'5%' }}>
                <View style={{ width: '48%', padding: '5%', borderWidth: 1, borderRadius: 8, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 14, color: colors.grey, textAlign: 'center', fontFamily: 'Gilroy-SemiBold' }}>Create an image for my presentation</Text>
                </View>
                <View style={{ width: '48%', padding: '5%', borderWidth: 1, borderRadius: 8, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 14, color: colors.grey, textAlign: 'center', fontFamily: 'Gilroy-SemiBold' }}>Create an image for my presentation</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/add4.png')} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
                <View style={{ width: '60%', backgroundColor: colors.grey, borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        ref={textInputRef}
                        placeholder="Message"
                        value={newMessage}
                        placeholderTextColor={colors.white}
                        style={{ paddingLeft: 20, fontSize: 20, }}
                        onChangeText={setNewMessage}
                    />
                    <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                        <Image source={require('../../assets/images/micWhite.png')} style={{ height: 32, width: 32 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                    <Image source={require('../../assets/images/send.png')} style={{ height: 32, width: 32 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Chat;
