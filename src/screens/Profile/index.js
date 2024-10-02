import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import styles from "./style";
import Collapsible1 from "../../components/Collapsible";
import SelectItem from "../../components/SelectItem";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import { BaseUrl2 } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";
import { useRoute } from "@react-navigation/native";

export default function Profile({ navigation }) {
    const route = useRoute();

    const name = route?.params?.name;
    const email = route?.params?.email;

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "Dr.",
        name: name,
        specialization: "",
        gender: "",
        city: "",
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

    const handleSubmit = async () => {
        setLoading(true);
        console.log("Form Data on Submit:", formData);
        if (
            !formData.name ||
            !formData.specialization ||
            !formData.gender ||
            !formData.city
        ) {
            Alert.alert("Missing Fields", "Please fill out all required fields!");
            return;
        }

        try {
            // const response = await axios.post(`${BaseUrl2}/doctor/doctorProfile`, formData);
            // console.log('Response:', response);
            // if (response.status === 200) {
            //     Alert.alert("Profile Created", "Your profile has been created successfully!");
            //     // const {id} = response.data;
            //     // console.log('id', id);
                navigation.navigate("CreateProfile", { formData, email:email }); // Adjust navigation as needed
            // } else {
            //     console.log('Non-200 response:', response);
            //     Alert.alert("Submission Failed", "An unexpected error occurred.");
            // }
        } catch (error) {
            console.error("Error response:", error.response);
            Alert.alert(
                "Submission Failed",
                error.response?.data?.message || "An error occurred while submitting your profile."
            );
        }finally{
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
                    onChangeText={(value) => handleChange("name", value)}
                />
            </View>
            <Collapsible1
                heading="Specialization"
                text="Select Specialization"
                content={["Physician", "Dermatologist", "Psychiatrist"]}
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
                {loading ? <ActivityIndicator color={colors.blue}/>:<Button1 Text="Continue" onPress={handleSubmit} />}
            </View>
        </View>
    );
}
