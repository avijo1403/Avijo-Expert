import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import styles from "./style";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import SquareRadio from "../../components/SquareRadio";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

  const email = 'ur.ajayk@gmail.com';
  const pass = '123456789';

  const [emailId, setEmailId] = useState(email);
  const [password, setPassword] = useState(pass);
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error('Failed to save the data to storage', e);
    }
};

  const handleLogin = async () => {
    setLoading(true);

    const payload = loginWithOtp
      ? { emailOrMobile: emailId }
      : { emailOrMobile: emailId, password };

    try {
      const response = await axios.post(`${BaseUrl2}/doctor/doctorlogin`, payload);
      console.log('Response:', response);

      // const json = await response.json();

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // console.log('json:',response.data.token, response.data._id);

      if (response.status === 200) {
        Alert.alert("Success", "You have logged in successfully!");

        await saveData('token',response.data.token);
        await saveData('id',response.data._id);
        console.log('id:', response.data.data, 'token:', response.data.token );
        navigation.replace("Dashboard");
      } else {
        Alert.alert("User not found", "Please check your credentials and try again.");
        navigation.navigate("Register"); // Navigate to Register screen if user does not exist
      }
    } catch (error) {
      console.error("Login Failed:", error);
      if(error.response.data.message === 'User not found'){
        navigation.navigate("Register");
      }
      Alert.alert(
        "Login Failed",
        error.response?.data?.message || "An error occurred while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <LoginInput
        text="Mobile Number / Email ID"
        placeholder="Mobile Number / Email ID"
        blue={true}
        value={emailId}
        onChangeText={setEmailId}
      />
      {!loginWithOtp && (
        <LoginInput
          text="Password"
          placeholder="Enter Password"
          blue={true}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      )}
      <View style={styles.otpTextContainer}>
        <View style={{ alignSelf: "flex-start", marginLeft:'3%' }}>
          <SquareRadio
            text="Remember me for 30 days"
            onPress={() => setRememberMe(!rememberMe)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.change}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "flex-start", marginBottom: "2%" , marginLeft:'3%'}}>
        <SquareRadio
          text="Login with OTP instead of password."
          onPress={() => setLoginWithOtp(!loginWithOtp)}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center", marginTop: "5%" }}>
        {/* <Button1 Text="Login" onPress={()=>{navigation.navigate('Profile')}} /> */}
        {loading ? <ActivityIndicator size="large" color="#0000ff" />:<Button1 Text="Login" onPress={handleLogin} />}
      </View>
    </View>
  );
}
