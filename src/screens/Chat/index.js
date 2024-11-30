import React, { useState, useRef, useEffect, useId } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image, Modal, Pressable, StyleSheet } from 'react-native';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';
import HeaderItem3 from '../../components/HeaderItem3';
import { BaseUrl2, hp, wp } from '../../assets/Data';
import PrescriptionForm from '../PrescriptionForm';
import { io } from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Chat = ({ navigation, route }) => {


    const userId = route?.params?.userId;
    const name = route?.params?.name;
    const doctorId = route?.params?.doctorId;
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const [messages, setMessages] = useState([
        // { id: 1, sender: 'You', text: 'Hello Emilli I hope you remember about your appoinment today with us.', time: '12:15 pm' },
        // { id: 2, sender: 'Jane', text: 'Hello Doctor, Yes i remember. I will be there right on time', time: '12:15 pm' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [id, setId] = useState('');

    const textInputRef = useRef(null);

    const socket = io('https://apichat-production.up.railway.app', {
        transports: ['websocket'],
    });

    useEffect(() => {
        fetchMessages();
    }, [])


    const fetchMessages = async () => {
        const getId = await AsyncStorage.getItem("profileId");
        console.log('ids:', getId, userId);
        const payload = {
            senderId: getId,
        };

        try {
            setLoading(true);
            const response = await fetch(`${BaseUrl2}/user/all/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Message fetch successfully:", data.messages);
                setMessages(data.messages);
            } else {
                console.error("Failed to fetch message:", response.status, response.statusText);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.error("Error fetch message:", error);
        }
    };

    useEffect(() => {

        const initializeSocket = async () => {
            const getId = await AsyncStorage.getItem("profileId");
            console.log("getId:", getId);
            setId(getId);

            // Register the user
            socket.emit("registerUser", getId);

            // Listen for incoming messages
            socket.on("receiveMessage", (data) => {
                setMessages((prevMessages) => [...prevMessages, data]);
            });
        };

        initializeSocket();

        // Cleanup function
        return () => {
            socket.disconnect(); // Close the connection
            socket.off("receiveMessage"); // Remove event listener
        };
    }, []);



    const sendBackendMessage = async () => {
        const getId = await AsyncStorage.getItem("profileId");
        console.log('ids:', getId, userId);
        const payload = {
            senderId: getId,
            message: newMessage,
        };

        try {
            setLoading(true);
            const response = await fetch(`${BaseUrl2}/user/send/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Message sent successfully:", data);
            } else {
                console.error("Failed to send message:", response.status, response.statusText);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.error("Error sending message:", error);
        }
    };

    const sendMessage = async () => {
        const getId = await AsyncStorage.getItem("profileId");
        await sendBackendMessage();
        if (newMessage.trim()) {
            const content = {
                senderId: getId,
                receiverId: userId,
                message: newMessage,
            };
            // Emit the message to the server
            socket.emit('sendMessage', content);

            // Add the message locally
            setMessages((prevMessages) => [...prevMessages, { senderId: getId, message: newMessage }]);
            setNewMessage('');
            console.log('messages:', messages);
        }
    };

    useEffect(() => {
        console.log('data:', doctorId, userId, name);
    }, [])

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5%', width: '100%', backgroundColor: colors.blue }}>
                <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 16, width: 16 }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 8 }}>
                        <Image source={name === 'Dr. Jii (Ai health assistance)' ? require('../../assets/images/dr-ji.png') : require('../../assets/images/profile3.png')} style={{ height: 50, width: 50, marginLeft: '2%', borderRadius: 100 }} />
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.white, paddingLeft: '3%', width: '60%' }}>{name}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/video.png')} style={{ height: 24, width: 24, marginRight: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/phone.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View>
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
                <View
                    style={[
                        styles.message,
                        styles.receivedMessage,
                    ]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, paddingBottom: 0 }}>
                        <Image source={require('../../assets/images/tick2.png')} style={{ height: 24, width: 24 }} />
                        <View style={{ flexDirection: 'column', paddingLeft: '5%', width: '90%' }}>
                            <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-SemiBold' }}>Appointment Confirmed</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%', width: '100%', marginTop: '4%' }}>
                        <Image source={require('../../assets/images/calendar6.png')} style={{ height: 14, width: 14 }} />
                        <Text style={{ color: colors.darkGrey, fontSize: 10, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', paddingTop: '3%' }}>On May 20,2024</Text>
                        <Image source={require('../../assets/images/clock4.png')} style={{ height: 14, width: 14, marginTop: '3%', marginLeft: '3%' }} />
                        <Text style={{ color: colors.darkGrey, fontSize: 10, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', paddingTop: '3%' }}>On May 20,2024</Text>
                    </View>
                    <Text style={{ color: colors.blue, fontSize: 10, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', paddingTop: '3%' }}>Change date & time</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%', width: '100%', marginTop: '4%' }}>
                        <View style={{ borderWidth: 1, borderRadius: 100, borderColor: colors.blue }}>
                            <Image source={require('../../assets/images/pp.png')} style={{ height: 60, width: 60, borderRadius: 100, }} />
                        </View>
                        <View style={{ width: "80%", }}>
                            <Text style={{ color: colors.grey, fontSize: 16, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', }}>Daniel</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: colors.grey, fontSize: 14, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', }}>Type: </Text>
                                <Text style={{ fontSize: 8, color: colors.blue, padding: 4, borderRadius: 4, paddingLeft: 8, paddingRight: 8, backgroundColor: '#E0F5FF' }}>Online</Text>
                            </View>
                            <Text style={{ color: colors.grey, fontSize: 12, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', width: '95%', marginTop: '2%' }}>Consult To/For: <Text style={{ color: colors.blue }}>Dermatologist</Text> </Text>
                            <Text style={{ color: colors.grey, fontSize: 12, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', marginTop: '2%' }}>Status: <Text style={{ color: colors.torquish }}>Progress</Text> </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 8, backgroundColor: colors.blue, borderRadius: 10, margin: 10 }}>
                            <Text style={{ color: colors.white, alignSelf: 'flex-end', fontSize: 10 }}>Check Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[
                        styles.message,
                        styles.sentMessage,
                    ]}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5, paddingBottom: 0 }}>
                        <Image source={require('../../assets/images/video3.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ flexDirection: 'column', paddingLeft: '3%', width: '80%' }}>
                            <Text style={{ color: colors.black, fontSize: 20, fontFamily: 'Gilroy-SemiBold' }}>Video consult</Text>
                            <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-Medium' }}>30 mins</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[styles.messageSender, { color: colors.black, alignSelf: 'flex-end' }]}>2:00 pm</Text>
                        <Image source={require('../../assets/images/doubleTick.png')} style={{ height: 15, width: 15 }} />
                    </View>
                </View>
                <View style={{ backgroundColor: colors.white, width: '70%', borderRadius: 22, borderTopLeftRadius: 0, padding: '1%', paddingTop: '3%', alignItems: 'center', marginTop: '5%', alignSelf: 'flex-end' }}>
                    <Image source={require('../../assets/images/checkup.png')} style={{ height: 150, width: '95%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', borderRadius: 14, backgroundColor: colors.white, padding: '5%', paddingBottom: '2%', justifyContent: 'space-between', paddingLeft: '2%' }}>
                        <View style={{ width: 100, marginLeft: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/flask2.png')} style={{ height: 15, width: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Prescription</Text>
                        </View>
                        <Image source={require('../../assets/images/dots2.png')} style={{ height: 15, width: 15 }} />
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', paddingBottom: '3%', marginLeft: '2%' }}>Upload on 15Oct 2024</Text>
                </View>
                <View style={{ backgroundColor: "#D3F1FF", width: '70%', borderRadius: 22, borderTopRightRadius: 0, padding: '3%', alignItems: 'center', marginTop: '5%', alignSelf: 'flex-end' }}>
                    <View style={{
                        flexDirection
                            : 'row', alignItems: 'center', width: '100%', borderRadius: 14, backgroundColor: colors.white, padding: '2%'
                    }}>
                        <Image source={require('../../assets/images/clipcall1.png')} style={{ height: 76, width: 76 }} />
                        <View style={{ width: 100, marginLeft: '3%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Clipcal 500 Tablet 15</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>30mg </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: colors.white, padding: '2%', borderRadius: 14, marginTop: '2%' }}>
                        <Image source={require('../../assets/images/clipcall2.png')} style={{ height: 76, width: 76 }} />
                        <View style={{ width: 100, marginLeft: '3%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Clipcal 500 Tablet 15</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>30mg </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ padding: '2%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>See more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 35, width: '90%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Order now</Text>
                    </TouchableOpacity>
                </View>
                {messages.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.message,
                            message.senderId === '672de8e8937b405faf6f61f6' ? styles.sentMessage : styles.receivedMessage,
                        ]}
                    >
                        <Text style={[styles.messageText, { color: message.senderId === '672de8e8937b405faf6f61f6' ? colors.black : colors.black }]}>{message.message}</Text>
                        {/* <Text style={[styles.messageSender, { color: message.senderId === '672de8e8937b405faf6f61f6' ? colors.blue : colors.white }]}>{message.time}</Text> */}
                    </View>
                ))}
            </ScrollView>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', alignSelf: 'center', marginBottom: '5%' }}>
                <View style={{ width: '48%', padding: '5%', borderWidth: 1, borderRadius: 8, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 14, color: colors.grey, textAlign: 'center', fontFamily: 'Gilroy-SemiBold' }}>Create an image for my presentation</Text>
                </View>
                <View style={{ width: '48%', padding: '5%', borderWidth: 1, borderRadius: 8, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 14, color: colors.grey, textAlign: 'center', fontFamily: 'Gilroy-SemiBold' }}>Create an image for my presentation</Text>
                </View>
            </View> */}
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('PrescriptionForm')}>
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
            <Modal
                // animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: colors.blackTrasparent }}>
                    <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white, height: '70%' }}>
                        <PrescriptionForm />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default Chat;


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.background,
        width: '100%'
    },
    messageContainer: {
        paddingVertical: 10,
        marginHorizontal: '2%',
    },
    message: {
        maxWidth: '70%',
        alignSelf: 'flex-start',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: colors.white,
        borderBottomRightRadius: 0,
        borderRadius: 22
    },
    receivedMessage: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 0,
        borderRadius: 22
    },
    messageText: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        padding: 10,
        paddingBottom: 0
    },
    messageSender: {
        fontSize: 12,
        marginTop: 5,
        padding: 10,
        paddingTop: 0
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: '5%'
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        marginRight: 10,
        color: 'black',
        fontSize: 16,
        fontFamily: 'Gilroy-SemiBold'
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        width: 150,
        paddingRight: '5%'
    },
    linkDescription: {
        fontSize: 12,
        color: 'white',
        width: 150
    },
    linkImage: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginLeft: '5%',

    },
    linkContainer: {
        flexDirection: 'row',
        paddingRight: '10%',
        alignItems: 'center',
        backgroundColor: 'darkblue',
    },
    descContainer: {
        flexDirection: 'column',
        padding: '5%',
    }
});