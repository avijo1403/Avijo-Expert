import React, { useEffect, useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { colors } from '../../Theme/GlobalTheme';
import AgoraUIKit from 'agora-rn-uikit';
import { BaseUrl2, wp } from '../../assets/Data';

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

const VideoChat = ({ navigation }) => {

    const [videoCall, setVideoCall] = useState(true);
    const [token, setToken] = useState('');
    const [uid, setUid] = useState(Math.floor(Math.random() * 1000));


    const fetchToken = async () => {
        const data = {
            "channelName": "test",
            "uid": uid,
        }
        try {
            const response = await fetch(`${BaseUrl2}/user/agoraToken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            console.log('response', json.token);
            console.log('uid:', uid);
            setToken(json.token);
        } catch (e) {
            console.log('error fetch token...', e);
        }
    }

    useEffect(() => {
        fetchToken();
    }, []);

    const connectionData = {
        appId: 'd19a9bdbb20e41dc8fad2ff7fe7f3d34',
        channel: 'test',
        token: token,
        uid: uid,
    };


    const callbacks = {
        EndCall: () => navigation.goBack(),
    };

    return (
        <View style={{ flex: 1, width: '100%' }}>
            {videoCall ? (
                <View style={{ flex: 1, width: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 48, width: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', top: '5%', left: '3%' }}>
                        <Image
                            source={require('../../assets/images/leftWhite.png')}
                            style={{ height: 16, width: 16 }}
                        />
                    </TouchableOpacity>
                    <AgoraUIKit
                        connectionData={connectionData}
                        rtcCallbacks={callbacks}
                        onError={(error) => console.error('Agora Error:', error)}
                        onStatusChange={(status) => console.log('Agora Status:', status)}
                        styleProps={{
                            minViewStyles: {
                                // position: 'absolute',
                                marginLeft: wp(60),
                                alignSelf: 'flex-start',
                                top: 0,
                                width: 120,
                                height: 180,
                                // borderWidth: 1,
                                // borderColor: 'white',  // Optional: for visual clarity
                            },
                            maxViewStyles: {
                                height: dimensions.height,
                            },
                            localBtnContainer: {
                                borderWidth: 1,
                                backgroundColor: colors.black,
                                paddingTop: '5%',
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                            },
                            BtnTemplateStyles: {
                                height: 40,
                                width: 40,
                            },
                        }}
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image
                            source={require('../../assets/images/viewPdf.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}
        </View>
    );
};

const styles = {
    buttonContainer: {
        position: 'absolute',
        top: '75%',  // Adjust as needed
        right: '5%',  // Adjust as needed
        zIndex: 2,
    },
    buttonImage: {
        width: 150,  // Adjust as needed
        height: 70,  // Adjust as needed
    },
};

export default VideoChat;
