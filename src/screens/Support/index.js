import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from './style';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';
import HeaderItem3 from '../../components/HeaderItem3';
import { hp, wp } from '../../assets/Data';
import Icon from "react-native-vector-icons/FontAwesome";

const Support = ({ navigation }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'Jane', text: 'Hello Emilli I hope you remember about your appoinment today with us.', time: '12:15 pm' },
        { id: 2, sender: 'You', text: 'Hello Doctor, Yes i remember. I will be there right on time', time: '12:15 pm' },
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

    return (
        <View style={styles.Container}>
            <HeaderItem3
                text="Support"
                onPress={() => navigation.goBack()}
                right2={<Image source={require('../../assets/images/whitePhone.png')} style={{ height: 28, width: 28 }} />}
                onRightPress={() => navigation.navigate('VideoChat')} />
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
                </View> */}
                {messages.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.message,
                            message.sender === 'You' ? styles.receivedMessage : styles.sentMessage,
                        ]}
                    >
                        <Text style={[styles.messageText, { color: message.sender === 'Jane' ? colors.black : colors.white }]}>{message.text}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={[styles.messageSender, { color: message.sender === 'Jane' ? colors.blue : colors.white }]}>{message.time}</Text>
                            <Image source={require('../../assets/images/doubleCheck.png')} style={{height:20, width:20}}/>
                        </View>
                    </View>
                ))}
                <View
                        style={[
                        {width:'70%', borderWidth:2, alignSelf:'flex-end', borderRadius:20, borderBottomRightRadius:0, borderColor:colors.lightgrey, paddingBottom:'2%'}
                        ]}
                    >
                        <Text style={[styles.messageText, {color: colors.darkGrey }]}>Placed on <Text style={{color:colors.blue}}>April 12, 02:24PM</Text></Text>
                        <Text style={[styles.messageText2, {color: colors.darkGrey }]}>ORD2637485858</Text>
                        <Text style={[styles.messageText2, {color: colors.darkGrey }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  dolore magna aliqua. Ut enim ad, nostrud exercitation  commodo consequat.</Text>
                        <Text style={[styles.messageText2, {color: colors.green }]}>Your Order was delivered</Text>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={[styles.messageSender, { color: colors.grey }]}></Text>
                            <Image source={require('../../assets/images/doubleCheck.png')} style={{height:20, width:20}}/>
                        </View> */}
                    </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/add3.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    placeholder="Write your message"
                    value={newMessage}
                    placeholderTextColor={'black'}
                    onChangeText={setNewMessage}
                />
                <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                    <Image source={require('../../assets/images/send.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Support;
