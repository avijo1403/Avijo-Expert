import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import SquareRadio from "../../components/SquareRadio";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import CodePicker from "../../components/CodePicker";
import axios from "axios";
import { BaseUrl2 } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";

export default function Register({navigation}){

    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      mobile: "",
      countryCode: "+91(IND)",
    });
    const [loading, setLoading] = useState(false);
  
    const handleInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleCountryCodeChange = (code) => {
      setFormData({
        ...formData,
        countryCode: code,
      });
    };
  
    const handleSubmit = async () => {
        setLoading(true);
        const { fullName, email, password, mobile, countryCode } = formData;
      
        const payload = {
          fullName:fullName,
          emailId: email,
          password:password,
          mobileNumber: mobile,
        };
      
        try {
          const response = await axios.post(`${BaseUrl2}/doctor/doctorCreate`, payload);
          if (response.status === 200) {
            navigation.navigate('Verification', {emailId: formData.email, mobileNumber: formData.mobile, fullName: formData.fullName, password : formData.password});
            Alert.alert("Registration successful");
          } else if (response.status === 409) {
            Alert.alert("Already Registered");
          } else {
            Alert.alert("Registration failed");
          }
        } catch (error) {
          console.error("Error:", error);
          Alert.alert(
            "Registration Failed",
            error.response?.data?.message || "An error occurred while registering. Please try again."
          );
        } finally {
          setLoading(false);
          setFormData({
            fullName: "",
            email: "",
            password: "",
            mobile: "",
            countryCode: "+91(IND)",
          })
        }
      };
      
      useEffect(()=>{
        console.log('mobile', formData.mobile);
      },[]);
    
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Join avijo</Text>
            <LoginInput text="Full Name" placeholder="Full Name" onChangeText={(value) => handleInputChange("fullName", value)}/>
            <LoginInput text="Email ID" placeholder="Email ID" onChangeText={(value) => handleInputChange("email", value)}/>
            <LoginInput text="Create Password" placeholder="Create Password" secureTextEntry={true} onChangeText={(value) => handleInputChange("password", value)}/> 
            <Text style={styles.numberHeading}>Mobile Number</Text>
            <View style={styles.phoneContainer}>
            <CodePicker onValueChange={(code) => handleCountryCodeChange(code)} defaultValue={formData.countryCode}/>
            <TextInput style={styles.phoneInput} placeholder="Mobile Number" onChangeText={(value) => handleInputChange("mobile", value)}/>
            </View>
            <View style={{alignSelf:'flex-start', width:'100%' ,alignItems:'flex-start', marginLeft:'5%', marginTop:'5%'}}>
            <Text style={{fontSize:12, fontFamily: 'Poppins-Medium', color:colors.grey, padding:'2%', paddingTop:0}}>Receive relevent offers and promotional communication from avijo</Text>
            </View>
            <View style={styles.termContainer}>
            <SquareRadio text="By signing up. I agree to"/>
                <TouchableOpacity>
                    <Text style={styles.term}>terms</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                {loading ? <ActivityIndicator color={colors.blue}/>:<Button1 Text="Verify" onPress={handleSubmit} />}
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Are you a doctor?</Text>
                <TouchableOpacity>
                    <Text style={styles.signup}> Register Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}