import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert, TextInput, ActivityIndicator } from "react-native";
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse } from "react-native-image-picker";
import styles from "./style";
import LoginInput from "../../components/LoginInput";
import Collapsible from "../../components/Collapsible";
import { colors } from "../../Theme/GlobalTheme";
import axios from "axios";
import { BaseUrl2 } from "../../assets/Data";
import uuid from 'react-native-uuid';

export default function CreateProfile({ navigation, route }) {

    const initialFormData = route.params?.formData || {};
    const email = route.params?.email || '';
    const [selectedImage, setSelectedImage] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [loading, setLoading] = useState(false);

    const uniqueId = uuid.v4();

    const handleChangeText = (text) => {
        // Validate and format the input
        const formattedDate = formatInputDate(text);
        setDateOfBirth(formattedDate);
    };

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

    const [formData, setFormData] = useState({
        doctorId: uniqueId,
        fullName: initialFormData.name || "",
        title: initialFormData.title || "",
        emailId: email || "",
        specialization: initialFormData.specialization || "",
        experience: initialFormData.experience || "",
        gender: initialFormData.gender || "",
        dateOfBirth: initialFormData.dateOfBirth || "",
        degree: initialFormData.degree || "",
        collegeUniversity: initialFormData.college || "",
        year: initialFormData.year || "",
        city: initialFormData.city || "",
        colonyStreetLocality: initialFormData.locality || "",
        country: initialFormData.country || "",
        pinCode: initialFormData.pinCode || "",
        state: initialFormData.state || "",
        registrationNumber: initialFormData.registrationNumber || "",
        registrationCouncil: initialFormData.registrationCouncil || "",
        registrationYear: initialFormData.registrationYear || "",
        identityProof: initialFormData.identityProof || "",
        documentToUpload: initialFormData.documentToUpload || "",
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
        setLoading(true);
        try {
            const response = await axios.post(
                BaseUrl2 + "/doctor/doctorProfile",
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
        }finally{
            setLoading(false);
        }
    };
    


    useEffect(() => {
        console.log('data:', initialFormData);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <TouchableOpacity style={{ marginTop:'5%', alignSelf:'flex-start', marginLeft:'5%'}} onPress={()=>{navigation.goBack()}}>
                <Image source={require('../../assets/images/left.png')} style={{height:32, width:32,}}/>
                </TouchableOpacity>
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
                <Collapsible heading="Specialization" text={formData.specialization} onSelect={(value) => handleChange('specialization', value)} />
                <Collapsible heading="Experience" text="Enter years of experience" content={['1', '2']} onSelect={(value) => handleChange('experience', value)} />
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
                <Collapsible heading="Degree" text="Select your Degree" content={["MBBS"]} onSelect={(value) => handleChange('degree', value)} />
                <Collapsible heading="College / University" text="Select Year" content={["Harvard Medical School"]} onSelect={(value) => handleChange('collegeUniversity', value)}/>
                <Collapsible heading="Year" text="Select your Year" content={[2005]} onSelect={(value) => handleChange('year', value)} />
                <Text style={styles.subHeading}>Address</Text>
                <Collapsible heading="City" text="Select your City" content={["New York"]} onSelect={(value) => handleChange('city', value)}/>
                <Collapsible heading="Colony / Street / Locality" text="Select your Option" content={["123 Main St"]} onSelect={(value) => handleChange('colonyStreetLocality', value)}/>
                <Collapsible heading="Country" text="India" content={["USA"]} onSelect={(value) => handleChange('country', value)}/>
                <Collapsible heading="Pin Code" text="Select your Option" content={["10001"]} onSelect={(value) => handleChange('pinCode', value)}/>
                <Collapsible heading="State" text="Select your Option" content={["NY"]} onSelect={(value) => handleChange('state', value)}/>
                <Text style={styles.subHeading}>Registration Details</Text>
                <LoginInput text="Registration Number" placeholder="Enter Registration Number" onChangeText={(value) => handleChange('registrationNumber', value)}/>
                <Collapsible heading="Registration Council" text="Select your Option" content={["Medical Council of New York"]} onSelect={(value) => handleChange('registrationCouncil', value)}/>
                <Collapsible heading="Registration Year" text="Select your Option" content={[2005]} onSelect={(value) => handleChange('registrationYear', value)}/>
                {/* <Text style={styles.subHeading}>Identity Proof</Text>
                <LoginInput text="Registration Number" placeholder="Enter Registration Number" onChangeText={(value) => handleChange('degree', value)}/>
                <Collapsible heading="Registration Council" text="Select your Option" onSelect={(value) => handleChange('degree', value)}/>
                <Collapsible heading="Registration Year" text="Select your Option" onSelect={(value) => handleChange('degree', value)}/>
                <Collapsible text="Document to be uploaded" content={["Aadhar Card", "Pan Card", "Voter Card", "Passport"]} onSelect={(value) => handleChange('degree', value)}/> */}
                <Text style={{ alignSelf: 'center', marginTop: '5%', fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Upload here</Text>
                {loading ? <ActivityIndicator color={colors.blue}/>:<TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Image source={require('../../assets/images/upload.png')} style={{ height: 27, width: 30, alignSelf: 'center' }} />
                </TouchableOpacity>}
            </ScrollView>
        </View>
    );
}
