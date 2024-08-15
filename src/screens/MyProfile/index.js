import React, { useRef, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import LoginInput from "../../components/LoginInput";
import Carousel from "react-native-snap-carousel";
import ProfileItem from "../../components/ProfileItem";
import Button1 from "../../components/Button1";


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

export default function MyProfile({navigation}) {

    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const carouselRef = useRef(null);
    const [initialIndex, setInitialIndex] = useState(0);
    const [time1, setTime1] = useState(true);
    const [time2, setTime2] = useState(false);

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
            <HeaderItem2 text="My Profile" onPress={()=>navigation.goBack()}/>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '100%', marginTop: '5%', backgroundColor: colors.white, borderRadius: 3, alignItems: 'flex-end', padding: 5, elevation: 5 }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ width: 77, height: 98, marginLeft: '5%' }} />
                    <TouchableOpacity style={{ paddingLeft: '5%', marginTop: '5%', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/add.png')} style={{ height: 9.2, width: 9.2 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginTop: '5%' }}>Change</Text>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginTop: '5%' }}>Profile Photo</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput text="Name" placeholder="Enter your Name " />
                <LoginInput text="EMAIL " placeholder="Enter your Email" />
                <LoginInput text="Mobile number" placeholder="Enter your Mobile number " />
                <View style={styles.calendarContainer}>
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
                </View>
                <View style={styles.moonContainer}>
                    <Image source={require('../../assets/images/moon.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.moonText}>Evening Slope</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%' }}>
                    <TouchableOpacity onPress={handleTime1} style={{ borderWidth: time1 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time1 ? colors.orange : colors.darkGrey }}>07.00 PM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTime2} style={{ borderWidth: time2 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time2 ? colors.orange : colors.darkGrey }}>08.00 PM</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.about}>About</Text>
                    <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} />
                </View>
                <Text style={styles.aboutText}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <Text style={[styles.aboutText, { marginTop: '3%' }]}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <TouchableOpacity style={{ width: '90%' }}><Text style={[styles.aboutText, { color: colors.blue, textDecorationLine: 'underline' }]}>Know more</Text></TouchableOpacity>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.specialization}>Specialization</Text>
                    <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} />
                </View>
                <Text style={styles.generalMedicine}>MD (General Medicine)</Text>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.specialization}>Services</Text>
                    <Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16 }} />
                </View>
                <Text style={styles.generalMedicine}>Hypertension Treatement</Text>
                <Text style={styles.generalMedicine}>Diabetes Management</Text>
                <Text style={styles.generalMedicine}>ECG</Text>
                <Text style={styles.specialization}>Avialable For</Text>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', paddingBottom:'5%', backgroundColor:colors.white, elevation:5}}>
                <ProfileItem icon={require('../../assets/images/available1.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true}/>
                <ProfileItem icon={require('../../assets/images/available2.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true}/>
                <ProfileItem icon={require('../../assets/images/available3.png')} name="Online Consultation" text="Convenient, Reliable online consultation for all your health needs." showToggle={true}/>
               </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                    <Button1 Text="Save"/>
                </View>
            </ScrollView>
        </View>
    )
}

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