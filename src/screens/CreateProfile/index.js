import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert, TextInput, ActivityIndicator, StyleSheet, ToastAndroid } from "react-native";
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse } from "react-native-image-picker";
import LoginInput from "../../components/LoginInput";
import Collapsible from "../../components/Collapsible";
import { colors } from "../../Theme/GlobalTheme";
import axios from "axios";
import { BaseUrl2 } from "../../assets/Data";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Menu2 } from "../../components/Menu2";

export default function CreateProfile({ navigation, route }) {

    const initialFormData = route?.params?.formData || {};
    // const email = route.params?.email || '';
    const [selectedImage, setSelectedImage] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [loading, setLoading] = useState(false);
    const [profileId, setProfileId] = useState('');
    const [email, setEmail] = useState('');

    const uniqueId = uuid.v4();

    const handleChangeText = (text) => {
        // Validate and format the input
        const formattedDate = formatInputDate(text);
        setDateOfBirth(formattedDate);
    };


    const fetchProfileId = async () => {
        try {
            const emailId = await AsyncStorage.getItem("email");
            console.log('emailId', emailId);
            setEmail(emailId);
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
            return `${cleanedInput.slice(0, 4)}-${cleanedInput.slice(4, 6)}-${cleanedInput.slice(6, 8)}`;
        } else if (cleanedInput.length > 4) {
            return `${cleanedInput.slice(0, 4)}-${cleanedInput.slice(4, 6)}`;
        } else {
            return cleanedInput;
        }
    };


    useEffect(() => {
        fetchProfileId();
    }, []);

    const [formData, setFormData] = useState({
        doctorId: uniqueId,
        fullName: initialFormData?.name || "",
        title: initialFormData?.title || "",
        emailId: email || "",
        specialization: initialFormData?.specialization || "",
        experience: initialFormData?.experience || "",
        gender: initialFormData?.gender || "",
        dateOfBirth: initialFormData?.dateOfBirth || "",
        degree: initialFormData?.degree || "",
        collegeUniversity: initialFormData?.college || "",
        year: initialFormData?.year || "",
        city: initialFormData?.city || "",
        colonyStreetLocality: initialFormData?.locality || "",
        country: initialFormData?.country || "",
        pinCode: initialFormData?.pinCode || "",
        state: initialFormData?.state || "",
        registrationNumber: initialFormData?.registrationNumber || "",
        registrationCouncil: initialFormData?.registrationCouncil || "",
        registrationYear: initialFormData?.registrationYear || "",
        identityProof: initialFormData?.identityProof || "",
        documentToUpload: initialFormData?.documentToUpload || "",
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
                } else {
                    console.log('Image URI is undefined');
                }
            }
        });
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };


    const handleSubmit = async () => {
        console.log('profileId', profileId);
        setLoading(true);
        if (!email || !formData.fullName || !formData.collegeUniversity || !formData.dateOfBirth || !formData.pinCode || !formData.registrationNumber) {
            ToastAndroid.show("All fields are medatory", ToastAndroid.SHORT);
            setLoading(false);
            return;
        }
        try {
            const response = await axios.put(
                `${BaseUrl2}/doctor/doctorProfile/update/${profileId}`,
                formData
            );
            console.log('Response:', response);
            if (response.status === 200) {
                Alert.alert("Profile Created", "Your profile has been created successfully!");
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



    useEffect(() => {
        console.log('data:', initialFormData);
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '3%', paddingBottom:'3%' }}>
                <TouchableOpacity style={{ marginTop: '5%', alignSelf: 'flex-start', }} onPress={() => { navigation.goBack() }}>
                    <Image source={require('../../assets/images/left.png')} style={{ height: 32, width: 32, }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Bold', color: colors.blue, marginRight: 20 }}>Submit</Text>
                    </TouchableOpacity>
                    <Menu2/>
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
                <LoginInput text="Full Name" placeholder="Full Name" value={formData.fullName} onChangeText={(value) => handleChange('fullName', value)} />
                <LoginInput text="Title" placeholder="Enter your title" value={formData.title} onChangeText={(value) => handleChange('title', value)} />
                <Collapsible heading="Specialization" text={formData.specialization} content={["MBBS", "Gynaecologist"]} onSelect={(value) => handleChange('specialization', value)} />
                <LoginInput text="Experience" placeholder="Enter your experience" keyboardType="numeric" value={formData.experience} onChangeText={(value) => handleChange('experience', value)} />
                {/* <Collapsible heading="Experience" text="Enter years of experience" content={['1', '2']} onSelect={(value) => handleChange('experience', value)} /> */}
                <Collapsible heading="Gender" text={formData.gender} content={["Male", "Female", "Other"]} onSelect={(value) => handleChange('gender', value)} />
                <Text style={styles.text}>Date of Birth</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                        value={dateOfBirth}
                        onChangeText={handleChangeText}
                        keyboardType="numeric"
                        maxLength={10} // Limit the input to 10 characters (YYYY-MM-DD format)
                    />
                </View>
                {/* <LoginInput text="Date of Birth" placeholder="Select your Date" value={formData.dateOfBirth} onChangeText={(value)=>handleChange('dateOfBirth',value)}/> */}
                {/* <Collapsible heading="Date of Birth" text="Select your Date" onSelect={(value)=>handleChange('dateOfBirth',value)}/> */}
                <Text style={styles.subHeading}>Education Details</Text>
                <LoginInput text="Degree" placeholder="your Degree" value={formData.degree} onChangeText={(value) => handleChange('degree', value)} />
                <LoginInput text="College / University" placeholder="your university" value={formData.collegeUniversity} onChangeText={(value) => handleChange('collegeUniversity', value)} />
                <LoginInput text="Year" placeholder="your Year" value={formData.year} onChangeText={(value) => handleChange('year', value)} />
                <Text style={styles.subHeading}>Address</Text>
                <View style={{ width: "90%", alignItems: 'center', justifyContent: "space-between", flexDirection: 'row' }}>
                    <View style={{ width: '25%' }}>
                        <LoginInput text="Pin Code" placeholder="0101" keyboardType="numeric" value={formData.pinCode} onChangeText={(value) => handleChange('pinCode', value)} />
                    </View>
                    <TouchableOpacity style={{ width: '72%', flexDirection: 'row', alignItems: 'center', height: 48, borderWidth: 1, borderRadius: 3, borderColor: colors.blue, alignSelf: 'flex-end', alignItems: "center", justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/map-marker.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%' }}>Use current location</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput text="City" placeholder="Enter your city" value={formData.city} onChangeText={(value) => handleChange('city', value)} />
                {/* <Collapsible heading="City" text="Select your City" content={["New York"]} onSelect={(value) => handleChange('city', value)} /> */}
                <LoginInput text="Colony / Street / Locality" placeholder="Enter your Colony/Street/Locality" value={formData.colonyStreetLocality} onChangeText={(value) => handleChange('colonyStreetLocality', value)} />
                {/* <Collapsible heading="Colony / Street / Locality" text="Select your Option" content={["123 Main St"]} onSelect={(value) => handleChange('colonyStreetLocality', value)} /> */}
                <LoginInput text="Country" placeholder="Enter your Country" value={formData.country} onChangeText={(value) => handleChange('country', value)} />
                {/* <Collapsible heading="Country" text="India" content={["USA"]} onSelect={(value) => handleChange('country', value)} /> */}
                {/* <Collapsible heading="Pin Code" text="Select your Option" content={["10001"]} onSelect={(value) => handleChange('pinCode', value)} /> */}
                <LoginInput text="State" placeholder="Enter your state" value={formData.state} onChangeText={(value) => handleChange('state', value)} />
                {/* <Collapsible heading="State" text="Select your Option" content={["NY"]} onSelect={(value) => handleChange('state', value)} /> */}
                <Text style={styles.subHeading}>Registration Details</Text>
                <LoginInput text="Registration Number" placeholder="Enter Registration Number" onChangeText={(value) => handleChange('registrationNumber', value)} />
                <LoginInput text="Registration Council" placeholder="Registration Council" value={formData.registrationCouncil} onChangeText={(value) => handleChange('registrationCouncil', value)} />
                {/* <Collapsible heading="Registration Council" text="Select your Option" content={["Medical Council of New York"]} onSelect={(value) => handleChange('registrationCouncil', value)} /> */}
                <LoginInput text="Registration Year" placeholder="Registration Year" value={formData.registrationYear} onChangeText={(value) => handleChange('registrationYear', value)} />
                {/* <Collapsible heading="Registration Year" text="Select your Option" content={[2005]} onSelect={(value) => handleChange('registrationYear', value)} /> */}
                {/* <Text style={styles.subHeading}>Identity Proof</Text>
                <LoginInput text="Registration Number" placeholder="Enter Registration Number" onChangeText={(value) => handleChange('degree', value)}/>
                <Collapsible heading="Registration Council" text="Select your Option" onSelect={(value) => handleChange('degree', value)}/>
                <Collapsible heading="Registration Year" text="Select your Option" onSelect={(value) => handleChange('degree', value)}/>
                <Collapsible text="Document to be uploaded" content={["Aadhar Card", "Pan Card", "Voter Card", "Passport"]} onSelect={(value) => handleChange('degree', value)}/> */}
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