import React, { useCallback, useEffect, useRef, useState } from "react";
import { AppState, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible3 from "../../components/Collapsible3";
import { actions, defaultActions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import { debounce } from "lodash";

export default function AddQuestion({ navigation }) {

    const [select, setSelect] = useState(1);
    const RichText = useRef();
    const [article, setArticle] = useState("");
    const [appState, setAppState] = useState(AppState.currentState);
    const [showEditor, setShowEditor] = useState(false);


    // useEffect(() => {
    //     const subscription = AppState.addEventListener("change", handleAppStateChange);
    //     return () => {
    //         subscription.remove();
    //     };
    // }, []);

    const debouncedSetArticle = useCallback(
        debounce((text) => {
            setArticle(text);
        }, 500),
        []
    );

    const onChangeContent = (text) => {
        debouncedSetArticle(text);
    };

    const handleAppStateChange = (nextAppState) => {
        if (appState.match(/inactive|background/) && nextAppState === "active") {
            console.log("App has come to the foreground!");
            // Restore the editor's content if needed
            RichText.current?.setContentHTML(article);
        }
        setAppState(nextAppState);
    };


    function editorInitializedCallback() {
        RichText.current?.registerToolbar(function (items) {
            console.log("Toolbar click, selected items:", items);
        });
    }


    // Callback after height change
    function handleHeightChange(height) {
        // console.log("editor height change:", height);
    }

    function onPressAddImage() {
        // you can easily add images from your gallery
        RichText.current?.insertImage(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
        );
    }

    function insertVideo() {
        // you can easily add videos from your gallery
        RichText.current?.insertVideo(
            "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
        );
    }

    const QuestionData = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%" }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ height: 84, width: 64 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Dr. Sunil Puraswani</Text>
                        <Collapsible3 text="Public" />
                    </View>
                </View>
                <TextInput
                    style={{ fontSize: 18, fontFamily: "Gilroy-Regular", color: colors.black, width: '90%', marginTop: '5%', width: 330 }}
                    placeholder="Start your Question from here........"
                    verticalAlign="top"
                    placeholderTextColor={colors.grey}
                    multiline={true}
                />
            </View>
        )
    }


    const CreateData = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%" }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ height: 84, width: 64 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Dr. Sunil Puraswani</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, justifyContent: 'space-between', paddingTop: '2%', paddingBottom: '2%', borderRadius: 30, borderColor: colors.lightgrey, marginTop: '5%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingLeft: "5%" }}>Choose Credentials</Text>
                            <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 12, width: 12, marginRight: "5%" }} />
                        </View>
                    </View>
                </View>
                {/* <HTMLView value={article} stylesheet={styles.htmlView} />  */}
                {showEditor && <KeyboardAvoidingView style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center', flex: 1, marginTop: '5%' }}>
                    <RichEditor
                        ref={RichText}
                        style={{ width: '90%' }}
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
                        style={{marginTop:'40%'}}
                    />
                </KeyboardAvoidingView>}
                {!showEditor && <TouchableOpacity onPress={()=>setShowEditor(!showEditor)} style={{marginTop:'100%', width:'90%',}}>
                    <Image source={require('../../assets/images/text.png')} style={{height:24, width:80}}/>
                </TouchableOpacity>}
            </View>
        );
    };




    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.blue, paddingBottom: '1%' }}>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                        </TouchableOpacity>
                        {select === 1 && <Text style={styles.headerText}>Add Question</Text>}
                        {select === 2 && <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '75%' }}>
                            <Image source={require('../../assets/images/globe.png')} style={{ height: 20, width: 20 }} />
                            <Text style={styles.headerText2}>Add Question</Text>
                            <Image source={require('../../assets/images/whiteDown.png')} style={{ height: 24, width: 24, marginTop: '2%' }} />
                        </View>}
                    </View>
                    <View style={{ flexDirection: 'row', width: "17%", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Image source={select === 1 ? require('../../assets/images/add1.png') : require('../../assets/images/post.png')} style={{ height: 26, width: 60 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0, }}>Add Question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0 }}>Create Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {select === 1 && <QuestionData />}
                {select === 2 && <CreateData />}
            </ScrollView>
        </View>
    )
}