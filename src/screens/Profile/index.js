import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import Collapsible1 from "../../components/Collapsible";
import SelectItem from "../../components/SelectItem";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import { BaseUrl2, specializations } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';

export default function Profile({ navigation, route }) {
    // const route = useRoute();

    // const name = route?.params?.name;
    const email = route?.params?.emailId;

    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');

    const [formData, setFormData] = useState({
        title: "Dr.",
        emailId: email,
        fullName: "",
        specialization: "",
        gender: "",
        city: "",
        firebaseToken: token,
    });

    const handleSelect = (field, item) => {
        setFormData({
            ...formData,
            [field]: item,
        });
    };

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGenderChange = (gender) => {
        setFormData({
            ...formData,
            gender: gender,
        });
    };

    const handleCity = (city) => {
        console.log("City selected:", city);
        setFormData({
            ...formData,
            city: city,
        });
    };


    const fetchFcmToken = async (id) => {
        try {
            const token = await messaging().getToken(); // Fetches the FCM token
            console.log('Firebase Cloud Messaging Token:', token);
            setToken(token);
        } catch (error) {
            console.error('Error fetching FCM Token:', error);
        }
    };

    useEffect(() => {
        fetchFcmToken();
    }, [])

    const handleSubmit = async () => {
        setLoading(true);
        console.log("Form Data on Submit:", formData, email);
        if (
            !formData.fullName ||
            !formData.emailId ||
            !formData.specialization ||
            !formData.gender ||
            !formData.city
        ) {
            Alert.alert("Missing Fields", "Please fill out all required fields!");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${BaseUrl2}/doctor/doctorProfile`, formData);
            console.log('Response:', response);
            if (response.status === 200) {
                Alert.alert("Profile Created", "Your Account has been created successfully!");
                const { id } = response.data;
                console.log('id', id);
                await AsyncStorage.setItem("email", email);
                navigation.navigate("Dashboard"); // Adjust navigation as needed
            } else {
                console.log('Non-200 response:', response);
                Alert.alert("Submission Failed", "An unexpected error occurred.");
            }
        } catch (error) {
            console.error("Error response:", error);
            Alert.alert(
                "Submission Failed",
                error.response?.data?.message || "An error occurred while submitting your profile."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subHeading}>Hello Dr. Adi taygi! Let's build your dedicated profile.</Text>
            <Text style={styles.text}>Section A: Profile details</Text>
            <Text style={styles.textHeading}>Name</Text>
            <View style={styles.nameContainer}>
                <TextInput placeholder="Dr./Mr./Ms." style={styles.gender} editable={false} value={formData.title} />
                <TextInput
                    placeholder="Please enter your Name"
                    style={styles.name}
                    value={formData.name}
                    onChangeText={(value) => handleChange("fullName", value)}
                />
            </View>
            <Collapsible1
                heading="Specialization"
                text="Select Specialization"
                content={specializations}
                onSelect={(value) => handleSelect("specialization", value)}
            />
            <Text style={styles.textHeading}>Gender</Text>
            <View style={styles.bottomContainer}>
                <SelectItem
                    text="Male"
                    condition={formData.gender === 'Male'}
                    handleCondition={() => handleGenderChange('Male')}
                />
                <SelectItem
                    text="Female"
                    condition={formData.gender === 'Female'}
                    handleCondition={() => handleGenderChange('Female')}
                />
                <SelectItem
                    text="Other"
                    condition={formData.gender === 'Other'}
                    handleCondition={() => handleGenderChange('Other')}
                />
            </View>
            <LoginInput text="City" placeholder="Select City" onChangeText={(text) => handleCity(text)} value={formData.city} />
            <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginLeft: '2%' }}>
                {loading ? <ActivityIndicator color={colors.blue} /> : <Button1 Text="Continue" onPress={handleSubmit} />}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    subHeading: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        width: '90%',
        color: colors.blue,
        marginTop: '10%'
    },
    text: {
        color: colors.darkGrey,
        width: '90%',
        marginTop: '5%',
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        marginBottom: '5%'
    },
    nameContainer: {
        borderWidth: 1,
        borderRadius: 3,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.grey,
        height: 48
    },
    gender: {
        borderRightWidth: 1,
        borderColor: colors.grey,
        width: '30%',
        height: 40,
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        textAlign: 'center',
        color: colors.grey,
    },
    name: {
        width: '70%',
        height: 40,
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color: colors.grey,
        paddingLeft: 15,
        color: colors.black
    },
    textHeading: {
        width: '90%',
        marginTop: '5%',
        marginBottom: '2%',
        color: colors.darkGrey,
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
    },
    arrow: {
        height: 20,
        width: 20
    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 3,
        height: 48,
        padding: 10,
        backgroundColor: colors.white,
        borderColor: colors.grey,

    },
    content: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 350,
        backgroundColor: colors.white,
    },
    dropDownText: {
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        width: 200,
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
