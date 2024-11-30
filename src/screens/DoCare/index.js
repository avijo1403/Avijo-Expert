import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, formatDate, formatDateMonth, formatNumber, getData, hp, wp } from "../../assets/Data";
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DoCare({ navigation }) {


    const [id, setId] = useState();
    const [select, setSelect] = useState(1);
    const [doCareData, setDoCareData] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [allData, setAllData] = useState([]);
    const [openComment, setOpenComment] = useState('');
    const [comment, setComment] = useState('');
    const [stats, setStats] = useState([]);
    const [firstComment, setFirstComment] = useState('');


    // useEffect(() => {
    //     getData('id').then(id => setId(id));
    // }, []);

    const handleSelect = (no) => {
        setSelect(no);
    }


    const fetchUserData = async (id) => {
        try {
            const response1 = await fetch(`${BaseUrl2}/user/getUserSingle/${id}`);

            const json = await response1.json();

            console.log('json1:', json?.data?._id, json?.data?.fullName);
            if (json.data._id || json.data.fullName) {
                setAllData(prev => [...prev, { id: json?.data?._id, name: json?.data?.fullName }]);
            }
            console.log('all fetching:', allData);
        } catch (e) {
            console.log('error fetching post...', e);
        }
    }


    const fetchDrData = async (id) => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getDoctorProfile/${id}`);

            const json = await response.json();

            console.log('json1:', json.data._id, json?.data?.fullName);
            if (json.data._id || json.data.fullName) {
                setAllData(prev => [...prev, { id: json?.data?._id, name: json?.data?.fullName }]);
            }
            console.log('all fetching:', allData);
        } catch (e) {
            console.log('error fetching post...', e);
        }
    }
    const fetchStats = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/docare/stats`);
            const json = await response.json();
            console.log('stats:', json?.data?.reverse());
            setStats(json?.data?.reverse());
        } catch (e) {
            console.log('error fetching post...', e);
        }
    }

    const getPosterData = (id) => {
        if (doCareData) {
            const data = allData.find((item) => item.id === id);
            const name = data ? data?.name : 'Unknown';
            return name;
        }
    };


    const fetchDocare = async () => {
        try {
            setLoading(true);
            const postId = await AsyncStorage.getItem("profileId");
            setId(postId);
            const response = await fetch(`${BaseUrl2}/doctor/getAlldoCares`);
            const json = await response.json();
            console.log('json:', json.data[0].comments[0]);
            json.data.map(async (item) => {
                await fetchUserData(item.senderId);
                await fetchDrData(item.senderId);
            })

            const check = json.data[1].like?.find((item) => item === id)
            console.log('check:', check);

            if (json.data) {
                setDoCareData(json.data);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.error('error fetching DoCare...', e);
        }
    }


    const likePost = async (id, action) => {
        // setLoading(true);
        const profileId = await AsyncStorage.getItem("profileId");

        const data = {
            DoCareId: id,
            userId: profileId,
            action: action,
        }


        console.log('id:', data);
        try {
            const response = await fetch(`${BaseUrl2}/doctor/toggle-like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const jsonResponse = await response.json();
            console.log('Upload Response:', jsonResponse);
            // fetchDocare();
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    const postComment = async (id) => {
        const profileId = await AsyncStorage.getItem("profileId");

        const data = {
            userId: profileId,
            text: comment
        }


        console.log('id:', data);
        try {
            const response = await fetch(`${BaseUrl2}/doctor/${id}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const jsonResponse = await response.json();
            console.log('Upload Comment:', jsonResponse);
        } catch (error) {
            console.error('Error uploading comment:', error);
        }
    };


    useEffect(() => {
        fetchDocare();
    }, []);

    const handleAddLike = (postId) => {
        likePost(postId, 'like');

        console.log('post:', doCareData.find(item => item._id === postId).dislike.includes(id));
        if (doCareData.find(item => item._id === postId).dislike.includes(id)) {
            handleAddDisLike(postId);
        }

        setDoCareData((prevPosts) =>
            prevPosts.map((post) =>
                post._id === postId
                    ? {
                        ...post,
                        like: post.like.includes(id)
                            ? post.like.filter((uid) => uid !== id)
                            : [...post.like, id],
                    }
                    : post
            )
        );
    };


    const handleAddComment = (postId) => {
        postComment(postId);
        setDoCareData((prevPosts) =>
            prevPosts.map((post) =>
                post._id === postId
                    ? {
                        ...post,
                        comments: [...post.comments, {
                            userId: id,
                            text: comment
                        }],
                    }
                    : post
            )
        );
    };

    const handleAddDisLike = (postId) => {
        likePost(postId, 'dislike');
        if (doCareData.find(item => item._id === postId).like.includes(id)) {
            handleAddLike(postId);
        }
        setDoCareData((prevPosts) =>
            prevPosts.map((post) =>
                post._id === postId
                    ? {
                        ...post,
                        dislike: post.dislike.includes(id) // Check if user already liked
                            ? post.dislike.filter((uid) => uid !== id)
                            : [...post.dislike, id], // Add user ID to the like array
                    }
                    : post
            )
        );
    };

    const handleBookMark = (postId) => {
        likePost(postId, 'favorite');
        setDoCareData((prevPosts) =>
            prevPosts.map((post) =>
                post._id === postId
                    ? {
                        ...post,
                        favorite: post.favorite.includes(id) // Check if user already liked
                            ? post.favorite.filter((uid) => uid !== id)
                            : [...post.favorite, id], // Add user ID to the like array
                    }
                    : post
            )
        );
    }


    const memoizedDocareData = useMemo(() => doCareData, [doCareData]);


    return (
        <View style={styles.container}>
            <View style={{ width: '100%', padding: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingTop: '4%' }}>
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
            {loading ? <ActivityIndicator size={'large'} color={colors.blue} style={{ alignSelf: 'center', marginTop: "60%" }} /> : <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.container}>
                    {memoizedDocareData.length > 0 && doCareData?.map((item, index) => (
                        <>
                            {item?.type === "post" && <View key={index} style={{ width: '90%', alignItems: 'center', elevation: 5, backgroundColor: colors.white, borderRadius: 5, marginTop: '3%', padding: '3%', }}>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                                        <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                        <View style={{ width: '80%', paddingLeft: '5%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%' }}>
                                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }} numberOfLines={1} ellipsizeMode="tail">{allData && getPosterData(item.senderId)}</Text>
                                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '35%' }}>. Follow</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "80%" }}>{formatDateMonth(item.createdAt)}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/images/dot3.png')} style={{ height: 20, width: 20 }} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '3%', paddingLeft: '2%' }} numberOfLines={3} ellipsizeMode="tail">{item.text}</Text>
                                {/* <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '0%', paddingLeft: '2%' }}>There are so many freelancer who can help you with that</Text> */}
                                {item?.image && <Image source={{ uri: item?.image }} style={{ width: '95%', height: 90, borderRadius: 5, marginTop: '5%' }} />}
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 4, borderWidth: 1, borderColor: colors.grey, justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => handleAddLike(item._id)}>
                                                {/* <Text>{index}</Text> */}
                                                {item?.like?.find((val) => val === id) ?
                                                    <Image source={require('../../assets/images/thumbUp.png')} style={{ height: 18, width: 18, marginRight: '5%' }} /> :
                                                    <Image source={require('../../assets/images/thumbDown.png')} style={{ height: 18, width: 18, marginRight: '5%', transform: [{ rotate: '180deg' }] }} />
                                                }
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, width: 30, textAlign: 'center' }}>{doCareData && formatNumber(item?.like.length)}</Text>
                                            <TouchableOpacity onPress={() => handleAddDisLike(item._id)}>
                                                {item?.dislike?.find((val) => val === id) ?
                                                    <Image source={require('../../assets/images/thumbUp.png')} style={{ height: 18, width: 18, marginRight: '5%', transform: [{ rotate: '180deg' }] }} /> :
                                                    <Image source={require('../../assets/images/thumbDown.png')} style={{ height: 18, width: 18, marginRight: '5%' }} />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={{ marginLeft: "5%" }}>
                                            <Image source={require('../../assets/images/send2.png')} style={{ height: 22, width: 22, marginLeft: '5%' }} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => handleBookMark(item._id)} >
                                        {item?.favorite?.find((val) => val === id) ?
                                            <Image source={require('../../assets/images/book-mark.png')} style={{ height: 21, width: 21 }} /> :
                                            <Image source={require('../../assets/images/favorite.png')} style={{ height: 24, width: 24 }} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => setOpenComment(item._id)} style={{ width: '90%' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%', marginTop: '2%' }}>Comments <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 10 }}>{formatNumber(item.comments.length)}</Text></Text>
                                </TouchableOpacity>
                                {item?.comments?.length === 0 || openComment === item._id ? <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, width: '100%', padding: '3%', justifyContent: 'space-between' }}>
                                    <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                    <View style={{ width: '70%' }}>
                                        {/* <TouchableOpacity onPress={() => navigation.navigate('AddQuestion')}> */}
                                        <TextInput
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '500',
                                                color: colors.darkGrey,
                                                paddingLeft: '5%',
                                                borderWidth: 1,
                                                borderColor: colors.lightgrey,
                                                padding: 3,
                                                width: '100%',
                                                borderRadius: 50,
                                                marginLeft: '0%'
                                            }}
                                            placeholder="Add a comment...."
                                            placeholderTextColor={colors.grey}
                                            value={comment}
                                            onChangeText={(val) => setComment(val)}
                                        />
                                        {/* </TouchableOpacity> */}
                                    </View>
                                    <TouchableOpacity onPress={() => handleAddComment(item._id)} style={{ width: 30, backgroundColor: colors.blue, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                        <Text style={{ color: colors.white, fontSize: 10 }}>Send</Text>
                                    </TouchableOpacity>
                                </View> : ''}
                                {openComment === item._id && item.comments.length > 0 && item.comments.map((comment) => (<View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-center', justifyContent: 'space-between', marginTop: "3%" }}>
                                    <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                    <View style={{ width: '85%', paddingLeft: '3%', }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%' }}>{comment.text}</Text>
                                    </View>
                                </View>))}
                                {openComment !== item._id && item.comments.length > 0 && <TouchableOpacity onPress={() => setOpenComment(item._id)} style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-center', justifyContent: 'space-between', marginTop: "3%" }}>
                                    <Image source={require('../../assets/images/profile.png')} style={{ height: 44, width: 44, borderRadius: 100 }} />
                                    <View style={{ width: '85%', paddingLeft: '3%', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '100%' }}>{item?.comments[0]?.text}</Text>
                                    </View>
                                </TouchableOpacity>}
                            </View>}
                            {item?.type === "sponsored" && <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
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
                            </View>}
                            {item?.type === "question" &&
                                <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.white, marginTop: '5%', padding: '2%' }}>
                                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: '5%', borderBottomWidth: 1, paddingBottom: '5%', borderColor: colors.grey }}>
                                        <Image source={require('../../assets/images/question2.png')} style={{ height: 20, width: 20 }} />
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Questions for you</Text>
                                    </View>
                                    <View style={{ width: '100%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%' }}>
                                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "95%" }}>{item.question}</Text>
                                            <TouchableOpacity>
                                                <Image source={require('../../assets/images/dot3.png')} style={{ height: 20, width: 20 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%' }}>{item.answer.length > 0 ? item.answer.length + '  answer' : 'no answer yet'} . Last followed 14m</Text>
                                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', }}>
                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '28%', backgroundColor: colors.lightgrey, padding: '2%' }}>
                                                    <Image source={require('../../assets/images/answer.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                                    <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '400', color: colors.darkGrey }}>Answer</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
                                                <TouchableOpacity>
                                                    <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 20, width: 20 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>}
                        </>
                    ))}
                    <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.white, marginTop: '5%', marginBottom: '5%', padding: '2%' }}>
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
                </View >
            </ScrollView>}
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