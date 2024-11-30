import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert, TextInput, ActivityIndicator, StyleSheet, ToastAndroid } from "react-native";
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse } from "react-native-image-picker";
import LoginInput from "../../components/LoginInput";
import Collapsible from "../../components/Collapsible";
import { colors } from "../../Theme/GlobalTheme";
import axios from "axios";
import { BaseUrl2, formatDate, specializations } from "../../assets/Data";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Menu2 } from "../../components/Menu2";

export default function CreateProfile({ navigation, route }) {

    const initialFormData = route?.params?.formData || {};
    // const email = route.params?.email || '';
    const [selectedImage, setSelectedImage] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [loading, setLoading] = useState(false);
    const [draft, setDraft] = useState('');
    const [profileId, setProfileId] = useState('');
    const [email, setEmail] = useState('');

    const uniqueId = uuid.v4();

    const handleChangeText = (text) => {
        // Validate and format the input
        const formattedDate = formatInputDate(text);
        console.log('dob:', dateOfBirth);
        handleChange('dateOfBirth', formattedDate);
        setDateOfBirth(formattedDate);
    };


    const fetchProfileId = async () => {
        try {
            const emailId = await AsyncStorage.getItem("email");
            console.log('emailId', emailId);
            setEmail(emailId);
            handleChange('emailId', emailId);
            const getProfileId = await fetch(`${BaseUrl2}/doctor/getAllDoctorProfile`);
            const profileJson = await getProfileId.json();
            const profile = await profileJson?.data?.find((item) => item?.emailId === emailId);
            console.log('profile', profile);
            const id = await profile._id;
            setProfileId(id);
        } catch (e) {
            console.log('error fetching id', e);
        }
    }

    const formatInputDate = (input) => {
        // Remove non-numeric characters
        const cleanedInput = input.replace(/[^0-9]/g, '');

        // Format to YYYY-MM-DD (assuming the user types digits only)
        if (cleanedInput.length > 6) {
            return `${cleanedInput.slice(0, 2)}-${cleanedInput.slice(2, 4)}-${cleanedInput.slice(4, 8)}`;
        } else if (cleanedInput.length > 4) {
            return `${cleanedInput.slice(0, 2)}-${cleanedInput.slice(2, 4)}`;
        } else {
            return cleanedInput;
        }
    };

    const [formData, setFormData] = useState({
        doctorId: uniqueId,
        doctorImage: selectedImage,
        fullName: initialFormData?.name || draft?.fullName || "",
        title: initialFormData?.title || draft?.title || "",
        emailId: email || draft?.emailId || "",
        specialization: initialFormData?.specialization || draft?.specialization || "",
        experience: initialFormData?.experience || draft?.experience || "",
        gender: initialFormData?.gender || draft?.gender || "",
        dateOfBirth: dateOfBirth || draft?.dateOfBirth || "",
        degree: initialFormData?.degree || draft?.degree || "",
        collegeUniversity: initialFormData?.college || draft?.collegeUniversity || "",
        year: initialFormData?.year || draft?.year || "",
        city: initialFormData?.city || draft?.city || "",
        colonyStreetLocality: initialFormData?.locality || draft?.colonyStreetLocality || "",
        country: initialFormData?.country || draft?.country || "",
        pinCode: initialFormData?.pinCode || draft?.pinCode || "",
        state: initialFormData?.state || draft?.state || "",
        registrationNumber: initialFormData?.registrationNumber || draft?.registrationNumber || "",
        registrationCouncil: initialFormData?.registrationCouncil || draft?.registrationCouncil || "",
        registrationYear: initialFormData?.registrationYear || draft?.registrationYear || "",
        identityProof: initialFormData?.identityProof || draft?.identityProof || "",
        documentToUpload: initialFormData?.documentToUpload || draft?.documentToUpload || "",
    });

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('Image picker error: ', response.errorMessage);
            } else {
                const imageUri = response.assets?.[0]?.uri;
                if (imageUri) {
                    setSelectedImage(imageUri);
                    console.log('Selected image URI: ', imageUri);
                } else {
                    console.log('Image URI is undefined');
                }
            }
        });
    };

    const fetchDraft = async () => {
        try {
            const draftData = await AsyncStorage.getItem('draft');
            const parsedDraft = draftData ? JSON.parse(draftData) : null;
            setFormData(parsedDraft);
            setSelectedImage(parsedDraft?.doctorImage);
            console.log("parsedDraft:", parsedDraft);
            
        } catch (e) { 
            console.log('Error fetching draft...', e);
        }
    };

    const saveDraft = async () => {
        try {
            const updatedFormData = {
                ...formData,
                doctorImage: selectedImage,
            };
            await AsyncStorage.setItem('draft', JSON.stringify(updatedFormData));
            ToastAndroid.show("Saved as draft", ToastAndroid.SHORT);
            console.log('Draft saved:', updatedFormData);
        } catch (e) {
            console.log('Error saving draft...', e);
        }
    };


    useEffect(() => {
        fetchProfileId();
        fetchDraft();
    }, []);



    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
        // console.log(field, value);
    };


    const handleSubmit = async () => {
        console.log('profileId', profileId, dateOfBirth);
        await handleChange('emailId', email);
        await handleChange('dateOfBirth', dateOfBirth);
        setLoading(true);

        if (!email || !selectedImage || !formData?.fullName || !formData?.title ||
            !formData?.specialization || !formData?.experience ||
            !formData?.gender || !formData?.degree || !formData?.year ||
            !formData?.city || !formData?.country || !formData?.state ||
            !formData?.registrationCouncil || !formData?.registrationYear || !formData?.collegeUniversity ||
            !formData?.dateOfBirth || !formData?.pinCode ||
            !formData?.registrationNumber) {
            console.log('formdata:', formData, formData?.dateOfBirth);
            await AsyncStorage.setItem('draft', JSON.stringify(formData));
            fetchDraft();
            ToastAndroid.show("All fields are mandatory || saved as draft", ToastAndroid.SHORT);
            setLoading(false);
            return;
        }

        try {
            // Construct FormData
            const data = new FormData();
            data.append('doctorImage', {
                uri: selectedImage,
                type: 'image/jpeg', // Adjust type based on your image format
                name: 'doctor_profile.jpg',
            });
            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key]);
            });

            const response = await axios.put(
                `${BaseUrl2}/doctor/doctorProfile/update/${profileId}`,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('Response:', response);
            if (response.status === 200) {
                Alert.alert("Profile Created", "Your profile has been created successfully!");
                await AsyncStorage.removeItem('draft');
                navigation.navigate("Confirm");
            } else {
                console.log('Non-200 response:', response);
                Alert.alert("Submission Failed", "An unexpected error occurred.");
            }
        } catch (error) {
            console.error("Error response:", error.response);
            if (error.response) {
                Alert.alert(
                    "Submission Failed",
                    error.response.data.message || "An error occurred while submitting your profile."
                );
            } else {
                Alert.alert(
                    "Submission Failed",
                    "Network Error: Please check your internet connection and try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <View style={styles.container}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '3%', paddingBottom: '3%' }}>
                <TouchableOpacity style={{ marginTop: '5%', alignSelf: 'flex-start', }} onPress={() => { navigation.goBack() }}>
                    <Image source={require('../../assets/images/left.png')} style={{ height: 32, width: 32, }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Bold', color: colors.blue, marginRight: 20 }}>Submit</Text>
                    </TouchableOpacity>
                    <Menu2 draftPress={saveDraft} />
                    {/* <TouchableOpacity>
                        <Image source={require('../../assets/images/dots2.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.heading}>Create Profile</Text>
                <ImageBackground
                    style={styles.profile}
                    imageStyle={{ borderRadius: 50 }}
                    source={selectedImage ? { uri: selectedImage } : require('../../assets/images/profile.png')}
                >
                    <TouchableOpacity onPress={openImagePicker}>
                        <Image style={styles.edit} source={require('../../assets/images/edit.png')} />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.subHeading}>Basic Details</Text>
                {/* <Text style={styles.text}>{email}</Text> */}
                <LoginInput text="Full Name" placeholder="Full Name" value={formData?.fullName} onChangeText={(value) => handleChange('fullName', value)} />
                <LoginInput text="Title" placeholder="Enter your title" value={formData?.title} onChangeText={(value) => handleChange('title', value)} />
                <Collapsible heading="Specialization" text={formData?.specialization} content={specializations} onSelect={(value) => handleChange('specialization', value)} />
                <LoginInput text="Experience" placeholder="Enter your experience" keyboardType="numeric" value={formData?.experience} onChangeText={(value) => handleChange('experience', value)} />
                <Collapsible heading="Gender" text={formData?.gender} content={["Male", "Female", "Other"]} onSelect={(value) => handleChange('gender', value)} />
                <Text style={styles.text}>Date of Birth</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="DD-MM-YYYY"
                        value={dateOfBirth || formData?.dateOfBirth}
                        onChangeText={handleChangeText}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>
                <Text style={styles.subHeading}>Education Details</Text>
                <LoginInput text="Degree" placeholder="your Degree" value={formData?.degree} onChangeText={(value) => handleChange('degree', value)} />
                <LoginInput text="College / University" placeholder="your university" value={formData?.collegeUniversity} onChangeText={(value) => handleChange('collegeUniversity', value)} />
                <LoginInput text="Year" placeholder="your Year" keyboardType="numeric" value={formData?.year} onChangeText={(value) => handleChange('year', value)} />
                <Text style={styles.subHeading}>Address</Text>
                <View style={{ width: "90%", alignItems: 'center', justifyContent: "space-between", flexDirection: 'row' }}>
                    <View style={{ width: '25%' }}>
                        <LoginInput text="Pin Code" placeholder="0101" keyboardType="numeric" value={formData?.pinCode} onChangeText={(value) => handleChange('pinCode', value)} />
                    </View>
                    <TouchableOpacity style={{ width: '72%', flexDirection: 'row', alignItems: 'center', height: 48, borderWidth: 1, borderRadius: 3, borderColor: colors.blue, alignSelf: 'flex-end', alignItems: "center", justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/map-marker.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%' }}>Use current location</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput text="City" placeholder="Enter your city" value={formData?.city} onChangeText={(value) => handleChange('city', value)} />
                <LoginInput text="Colony / Street / Locality" placeholder="Enter your Colony/Street/Locality" value={formData?.colonyStreetLocality} onChangeText={(value) => handleChange('colonyStreetLocality', value)} />
                <LoginInput text="Country" placeholder="Enter your Country" value={formData?.country} onChangeText={(value) => handleChange('country', value)} />
                <LoginInput text="State" placeholder="Enter your state" value={formData?.state} onChangeText={(value) => handleChange('state', value)} />
                <Text style={styles.subHeading}>Registration Details</Text>
                <LoginInput text="Registration Number" placeholder="Enter Registration Number" keyboardType="numeric" value={formData?.registrationNumber} onChangeText={(value) => handleChange('registrationNumber', value)} />
                <LoginInput text="Registration Council" placeholder="Registration Council" value={formData?.registrationCouncil} onChangeText={(value) => handleChange('registrationCouncil', value)} />
                <LoginInput text="Registration Year" placeholder="Registration Year" keyboardType="numeric" value={formData?.registrationYear} onChangeText={(value) => handleChange('registrationYear', value)} />
                <Text style={{ alignSelf: 'center', marginTop: '5%', fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Upload here</Text>
                {loading ? <ActivityIndicator color={colors.blue} /> : <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Image source={require('../../assets/images/upload.png')} style={{ height: 27, width: 30, alignSelf: 'center' }} />
                </TouchableOpacity>}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 1,
    },
    profile: {
        height: 105,
        width: 103,
        marginTop: '10%',
    },
    edit: {
        height: 31,
        width: 33,
        marginLeft: '72%',
        marginTop: '65%'
    },
    heading: {
        marginTop: '15%',
        fontSize: 22,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
    },
    subHeading: {
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        width: '90%',
        paddingTop: '10%'
    },
    button: {
        width: '90%',
        marginTop: '5%',
        borderRadius: 12,
        backgroundColor: colors.blue,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 47,
        borderRadius: 3,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grey,
    },
    input: {
        height: 47,
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        textAlignVertical: 'center',
        width: '100%',
        paddingLeft: 15,
    },
    text: {
        width: '100%',
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        padding: '1%',
        paddingLeft: '5%',
        color: colors.darkGrey,
        marginBottom: 5, // Adjusted to avoid overlap with the input container
        marginTop: '5%'
    }
})