import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { Image } from "react-native";
import Button2 from "../../components/Button2";
import { BaseUrl2, profileOption, wp } from "../../assets/Data";
import { Rating } from "react-native-ratings";

export default function DrProfile({navigation}) {

    const [select, setSelect] = useState(0);
    const [reviews, setReviews] = useState([]);

    
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }).format(date);
      };

    const fetchReview = async () => {
        const response = await fetch(`${BaseUrl2}/user/getAllReview`);
        const json = await response.json();
        setReviews(json.reviews);
        console.log(json);
    }


    useEffect(() => {
        fetchReview();
        // console.log('id:', id);
    }, []);


    const Profile = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/profileName.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>Dr. Sunil Puraswani</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Just now</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>Hlo</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:"5%"}}>
                                <Image source={require('../../assets/images/chat.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '5%', padding: '3%', elevation: 5, backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>How do I care for my health without doing anything?</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '2%', borderRadius: 100, borderWidth: 1, borderColor: colors.blue }}>
                            <Image source={require('../../assets/images/blueShare3.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Answers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const Review=()=>{
        
        return(
            <View style={styles.container}>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
                <FlatList
                    style={{width:'100%'}}
                    contentContainerStyle={{alignItems:'center'}}
                    data={reviews}
                    renderItem={({ item }) => (
                        <View style={{ width: '100%', alignItems: 'center', borderColor: colors.grey, paddingBottom: '5%', borderTopWidth:1, }}>
                            <View style={{ width: '90%', marginTop: '2%', flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/review.png')} style={{ width: 56, height: 56, borderRadius: 73, alignSelf: 'center' }} />
                                <View style={{ marginLeft: '5%', width: '80%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 24, color: colors.black }}>Sebastian</Text>
                                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: colors.darkGrey }}>{formatDate(item.createdAt)}</Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: colors.darkGrey, paddingTop: '3%' }}>Visited For <Text style={{ color: colors.black }}>Food Poisining</Text></Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '1%' }}>
                                        <Rating
                                            type="star"
                                            ratingCount={5}
                                            imageSize={16}
                                            startingValue={item.rating}
                                            readonly={true}
                                            style={{ height: 16, width: 93, marginTop: '2%' }}
                                            ratingBackgroundColor={colors.white}
                                        />
                                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '2%', marginTop: '2%' }}>(152)</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: wp(90), paddingTop: '1%' }}>{item.comment}</Text>
                        </View>
                    )}
                />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem3 text="Dr. Sunil Puraswani" onPress={()=>navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%", padding: '3%', borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, elevation: 5, backgroundColor: colors.white }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ height: 84, width: 64 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Dr. Sunil Puraswani</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>-070676-35032</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>Pediatrician</Text>
                    </View>
                </View>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginLeft: "2%", marginTop: '5%' }}>
                    <View style={{ width: "52%" }}>
                        <Button2 left={<Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />} Text="Edit Profile" onPress={()=>navigation.navigate('MyProfile')} />
                    </View>
                    <View style={{ width: "52%" }}>
                        <Button2 left={<Image source={require('../../assets/images/blueShare2.png')} style={{ height: 20, width: 20, marginRight: '5%' }} />} Text="Share" />
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        data={profileOption}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ marginLeft: '5%', paddingRight: '5%', marginTop: "7%" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelect(item.id)} style={{ alignItems: 'center', borderBottomWidth: 2, borderColor: colors.grey }}>
                                <Text style={{ marginRight:15, textAlign: 'center', paddingBottom: '5%', fontSize: 14, fontFamily: 'Gilory-Medium', borderBottomWidth: 2, borderColor: select === item.id ? colors.blue : colors.white, color: select === item.id ? colors.blue : colors.black, padding:2 }}>{item.text}</Text>
                            </TouchableOpacity>
                        )} 
                        />
                </View>
                {select === 0 && <Profile/>}
                {select === 3 && <Review/>}
            </ScrollView>
        </View>
    )
}