import React, { useRef, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import LoginInput from "../../components/LoginInput";
import Carousel from "react-native-snap-carousel";
import ProfileItem from "../../components/ProfileItem";
import Button1 from "../../components/Button1";
import HeaderItem3 from "../../components/HeaderItem3";


const generateDates = () => {
    const dates = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // Current month (0-indexed)
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get number of days in the current month

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        dates.push({
            dateString: `${date.toLocaleString('default', { month: 'short' })} ${day}`,
            isCurrentDate: day === currentDay,
            day: day,
        });
    }

    return dates;
};

export default function MyProfile({ navigation }) {

    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const carouselRef = useRef(null);
    const [initialIndex, setInitialIndex] = useState(0);
    const [time1, setTime1] = useState(true);
    const [time2, setTime2] = useState(false);
    const [select, setSelect] = useState(1);

    const handleTime1 = () => {
        setTime1(true);
        setTime2(false);
    }

    const handleTime2 = () => {
        setTime1(false);
        setTime2(true);
    }

    useEffect(() => {
        const generatedDates = generateDates();
        setDates(generatedDates);

        const currentIndex = generatedDates.findIndex(date => date.isCurrentDate);
        setInitialIndex(currentIndex);
        setSelectedDate(generatedDates[currentIndex].day); // Set the initial selected date to the current date
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedDate(item.day)}>
            <View style={[
                styles.itemContainer,
                item.day === selectedDate && styles.selectedDateContainer
            ]}>
                <Text style={[
                    styles.dateText,
                    item.day === selectedDate && styles.selectedDateText
                ]}>
                    {item.dateString}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const goToNext = () => {
        carouselRef.current.snapToNext();
    };

    const goToPrevious = () => {
        carouselRef.current.snapToPrev();
    };


    return (
        <View style={styles.container}>
            <HeaderItem3 text="Edit Profile" onPress={() => navigation.goBack()} />
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.blue }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', backgroundColor: colors.blue }}>
                    <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0, }}>Personal Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.white, width: '49%', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', padding: '5%', paddingTop: 0 }}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '100%', marginTop: '5%', backgroundColor: colors.white, borderRadius: 3, alignItems: 'flex-end', padding: 5, }}>
                    <Image source={require('../../assets/images/profile.png')} style={{ width: 105, height: 105, marginLeft: '5%' }} />
                    <TouchableOpacity style={{ paddingLeft: '5%', marginTop: '5%', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/add.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginTop: '5%' }}>Add Profile</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginTop: '5%' }}>Photo</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput text="Name" placeholder="Alicia Johns" />
                <LoginInput text="EMAIL " placeholder="example123@gmail.com" />
                <LoginInput text="Mobile number" placeholder="+18359865917346 " />
                {/* <View style={styles.calendarContainer}>
                    <TouchableOpacity onPress={goToPrevious} style={styles.arrowButton}>
                        <Image source={require('../../assets/images/left.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <Carousel
                        ref={carouselRef}
                        data={dates}
                        renderItem={renderItem}
                        sliderWidth={250}
                        itemWidth={70}
                        firstItem={initialIndex} // Start from the current date
                    />
                    <TouchableOpacity onPress={goToNext} style={styles.arrowButton}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.moonContainer}>
                    <Image source={require('../../assets/images/moon.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.moonText}>Evening Slope</Text>
                </View> */}
                {/* <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%' }}>
                    <TouchableOpacity onPress={handleTime1} style={{ borderWidth: time1 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time1 ? colors.orange : colors.darkGrey }}>07.00 PM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTime2} style={{ borderWidth: time2 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time2 ? colors.orange : colors.darkGrey }}>08.00 PM</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <Text style={styles.about}>About</Text>
                    {/* <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} /> */}
                </View>
                <Text style={styles.aboutText}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <Text style={[styles.aboutText, { marginTop: '3%' }]}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                {/* <TouchableOpacity style={{ width: '90%' }}><Text style={[styles.aboutText, { color: colors.blue, textDecorationLine: 'underline' }]}>Know more</Text></TouchableOpacity> */}
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.specialization}>Specialization</Text>
                    {/* <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} /> */}
                </View>
                <Text style={styles.generalMedicine}>MD (General Medicine)</Text>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.specialization}>Services</Text>
                    {/* <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} /> */}
                </View>
                <Text style={styles.specialization}>Experience</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Consultation</Text>
                <Text style={styles.generalMedicine}>Currently Practicing- From June 2022</Text>
                <Text style={styles.specialization}>Education</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Medical University of Health Science</Text>
                <Text style={styles.generalMedicine}>Currently Practicing- From June 2022</Text>
                <View style={{ borderRadius: 50, backgroundColor: colors.lightgrey, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, padding: 7, paddingLeft: 15, paddingRight: 15 }}>2022-2024</Text>
                </View>
                <Text style={styles.specialization}>Clinic Details</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Elite Clinic</Text>
                <Text style={styles.generalMedicine}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', paddingBottom: '5%', backgroundColor: colors.white, elevation: 5 }}>
                    <ProfileItem icon={require('../../assets/images/available1.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true} />
                    <ProfileItem icon={require('../../assets/images/available2.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true} />
                    <ProfileItem icon={require('../../assets/images/available3.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true} />
                </View> */}
                <View style={{ width: '92%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '5%', marginRight: '1%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '52%', alignItems: 'center', height: 51, backgroundColor: colors.lightRed, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Delete Account</Text>
                        <Image source={require('../../assets/images/redBin2.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                    </TouchableOpacity>
                    <View style={{ width: '52%', alignItems: 'center' }}>
                        <Button1 Text="Save Changes" image={<Image source={require('../../assets/images/whiteTick.png')} style={{ height: 16, width: 16, marginLeft: 5 }} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'5%',
        borderBottomWidth:1,
        borderColor:colors.grey,
        height:38
      },
      itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        padding: 5,
      },
      dateText: {
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color:colors.black
      },
      arrowButton: {
        padding: 10,
      },
      arrowText: {
        fontSize: 24,
      },
      moonContainer:{
          flexDirection:'row',
          alignItems:'center',
          width:'90%',
          marginTop:'5%'
      },
      moonText:{
          paddingLeft:'8%',
          fontSize:12,
          fontFamily:'Gilroy-Regular',
          color:colors.black
      },
      about:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        paddingTop:'5%'
      },
      aboutText:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%',
        paddingTop:'2%'
      },
      specialization:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        marginTop:'5%'
      },
      generalMedicine:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%',
        marginTop:'5%'
      }
})

// Additional styles for the selected date
const selectedDateStyle = {
    selectedDateContainer: {
        backgroundColor: colors.white, // or any other color you prefer
        borderBottomWidth: 4,
        borderColor: colors.orange,
    },
    selectedDateText: {
        color: colors.orange, // or any other color you prefer
    },
};

Object.assign(styles, selectedDateStyle);