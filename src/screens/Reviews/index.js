import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import HeaderItem2 from "../../components/HeaderItem2";
import styles from "./style";
import { BaseUrl22, wp } from "../../assets/Data";
import { Rating } from "react-native-ratings";
import { colors } from "../../Theme/GlobalTheme";

export default function Reviews({ navigation }) {


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
        const response = await fetch(`${BaseUrl22}/user/getAllReview`);
        const json = await response.json();
        setReviews(json.reviews);
        console.log(json);
    }


    useEffect(() => {
        fetchReview();
        // console.log('id:', id);
    }, []);

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Reveiws" onPress={()=>navigation.goBack()}/>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Dr. Jane Cooper</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/star.png')} style={{ height: 16, width: 16 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingLeft: '2%' }}>(4.5)</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '2%', width: '90%', paddingTop: '2%' }}>Average Reveiws</Text>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={reviews}
                        renderItem={({ item }) => (
                            <View style={{ width: '100%', alignItems: 'center', borderColor: colors.grey, paddingBottom: '5%', borderTopWidth: 1, }}>
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
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', width: wp(90), paddingTop: '1%', color:colors.grey }}>{item.comment}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}