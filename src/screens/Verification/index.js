import React, { useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import styles from "./style";
import LoginInput from "../../components/LoginInput";
import Button1 from "../../components/Button1";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BaseUrl2 } from "../../assets/Data";

export default function Verification(){




    const [emailOtp, setEmailOtp] = useState("");
    const [mobileOtp, setMobileOtp] = useState("");
    const [loading, setLoading] = useState(false);
  
    const navigation = useNavigation();
    const route = useRoute();
    const { emailId, mobileNumber, fullName, password } = route.params || {};
    // const emailId = "usmanaliiali125@gmail.com";
    // const mobileNumber = "9053258847";
    // const fullName = "Usman";
    // const password = "usman123";
  
    const handleEmailOtpChange = (value) => setEmailOtp(value);
    const handleMobileOtpChange = (value) => setMobileOtp(value);
  
    const handleVerify = async () => {
      setLoading(true);
  
      if (!emailOtp || !mobileOtp) {
        setLoading(false);
        Alert.alert("Error", "Please enter both OTPs.");
        return;
      }
  
      const payload = {
        emailId,
        emailOTP: emailOtp,
        mobileNumber,
        mobileOTP: mobileOtp,
        fullName,
        password,
      };
  
      try {
        const response = await axios.post(`${BaseUrl2}/doctor/doctorVerify`, payload);
        if (response.status === 200) {
          Alert.alert("Success", "Verification successful!");
          navigation.navigate("Profile",{name: fullName, email: emailId});
        } else {
          Alert.alert("Error", response.data.message || "Verification failed.");
        }
      } catch (error) {
        Alert.alert(
          "Error",
          error.response?.data?.message || "Network error. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Two Step Verification</Text>
            <Text style={styles.subHeading}>Verify Email address </Text>
            <Text style={styles.text}>To Verify your Email, We sent you a code on your email address.</Text>
            <LoginInput text="Enter Email OTP" placeholder="Enter OTP" value={emailOtp} onChangeText={handleEmailOtpChange}/>
            <Text style={styles.subHeading}>Verify Mobile Number</Text>
            <Text style={styles.text}>To Verify your Number, We sent you a sms on your Phone.</Text>
            <LoginInput text="Enter Mobile number OTP" placeholder="Enter OTP" value={mobileOtp} onChangeText={handleMobileOtpChange}/>
            <View style={{width:'100%', alignItems:'center', marginTop:'10%', marginLeft:'2%'}}>
            { loading ? (  <ActivityIndicator size="small" color="#fff" />):
            (<Button1 Text="VERIFY" onPress={handleVerify}/>)}
            </View>
        </View>
    )
}