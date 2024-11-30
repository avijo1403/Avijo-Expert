import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import Button1 from "../../components/Button1";
import LoginInput from "../../components/LoginInput";
import SquareRadio from "../../components/SquareRadio";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../Theme/GlobalTheme";

export default function Login({ navigation }) {

  // const email = 'usmanzulfiqar14@gmail.com';
  // const pass = '123456789';

  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
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
      if (response.status === 200) {
        // Alert.alert("Success", "You have logged in successfully!");

        await saveData('token', response.data.token);
        await saveData('id', response.data.data._id);
        await saveData('email', response.data.data.emailId);
        console.log('id:', response.data.data._id, 'email:', response.data.data.emailId, 'token:', response.data.token);
        navigation.replace("Dashboard");
      } else {
        // Alert.alert("User not found", "Please check your credentials and try again.");
        navigation.navigate("Register"); // Navigate to Register screen if user does not exist
      }
    } catch (error) {
      console.error("Login Failed:", error);
      if (error.response.data.message === 'User not found') {
        navigation.navigate("Register");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', alignItems: 'center' }}>
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
          <View style={{ alignSelf: "flex-start", marginLeft: '3%' }}>
            <SquareRadio
              text="Remember me for 30 days"
              onPress={() => setRememberMe(!rememberMe)}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.change}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "flex-start", marginBottom: "2%", marginLeft: '3%' }}>
          <SquareRadio
            text="Login with OTP instead of password."
            onPress={() => setLoginWithOtp(!loginWithOtp)}
          />
        </View>
        <View style={{ width: "100%", alignItems: "center", marginTop: "5%" }}>
          {/* <Button1 Text="Login" onPress={()=>{navigation.navigate('Profile')}} /> */}
          {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Button1 Text="Login" onPress={handleLogin} />}
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '5%' }}>
        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Are you a doctor? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Register Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  y

}



const styles = StyleSheet.create({
  container:{
      flex:1,
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'white',
  },
  heading:{
      color:colors.blue,
      fontSize:32,
      fontFamily:'Gilroy-Bold',
      alignSelf:'flex-start',
      marginLeft:'5%',
      // bottom:'2%'
      marginTop:'25%'
  },
  otpTextContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'98%',
      paddingRight:'2%',
      top:'1%',
  },
  change:{
      fontSize:12,
      fontFamily:'Gilroy-SemiBold',
      color:colors.blue,
  }
})