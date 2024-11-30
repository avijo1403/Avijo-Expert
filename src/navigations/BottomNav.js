import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DoCare from "../screens/DoCare";
import Dashboard from "../screens/Dashboard";
import Patients from "../screens/Patients";
import DrProfile from "../screens/DrProfile";
import { BaseUrl2 } from "../assets/Data";
import NavigateProfile from "../screens/NavigateProfile";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [userId, setUserId] = useState(null);
  const [exist, setExist] = useState(false);
  const [gender, setGender] = useState('');


  const fetchData2 = async () => {
    const email = await AsyncStorage.getItem("email");
    console.log("email:", email);
    const response = await fetch(`${BaseUrl2}/doctor/getAllDoctorProfile`);
    const json = await response.json();
    const myGender = json?.data?.find(item => item.emailId === email);
    const myProfile = json.data?.find(item => item.emailId === email && item.registrationNumber);
    setGender(myGender.gender);
    console.log('profile:', myProfile, myGender.gender);
    if (myProfile) {
      setExist(true);
    } else {
      setExist(false);
    }
  }


  // Fetch the id from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem("id");
      setUserId(id);
    };
    fetchUserId();
    fetchData2();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: "40%",
            fontSize: 12,
            fontFamily: "OpenSans-Regular",
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.home}
                source={require("../assets/images/homeSmile.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                  width: 80,
                  textAlign: 'center',
                }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: "40%",
            fontSize: 12,
            fontFamily: "OpenSans-Regular",
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.home}
                source={require("../assets/images/diary2.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                  width: 60,
                  textAlign: 'center',

                }}
              >
                Patient
              </Text>
            </View>
          ),
        }}
        name="Patient"
        component={!exist ? Patients : NavigateProfile}
      />
      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: "40%",
            fontSize: 12,
            fontFamily: "OpenSans-Regular",
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.home}
                source={focused?require("../assets/images/product7.png"):require("../assets/images/product.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.green : colors.grey,
                }}
              >
                Product
              </Text>
            </View>
          ),
        }}
        name="Plans"
        component={OnlineMedicine}
      // initialParams={{ id: userId }}
      /> */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: "40%",
            fontSize: 12,
            fontFamily: "OpenSans-Regular",
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 24, width: 23, fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, }}>D</Text>
              <Text style={{ fontSize: 12, width: 60, textAlign: 'center', fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, }}>D<Text style={{ fontSize: 10 }}>OCARE</Text></Text>
              {/* <Image
                style={styles.home}
                source={require("../assets/images/doCareGrey.png")}
              /> */}
              {/* <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                }}
              >
                DoCare
              </Text> */}
            </View>
          ),
        }}
        name="DoCare"
        component={DoCare}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: "40%",
            fontSize: 12,
            fontFamily: "OpenSans-Regular",
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  borderWidth: 2,
                  height: 28,
                  width: 28,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                }}
              >
                {gender === 'Male' ? <Image
                  style={{ height: 24, width: 24, marginBottom: "2%" }}
                  source={require("../assets/images/profile2.png")}
                /> : gender === 'Female' ? <Image
                  style={{ height: 24, width: 24, marginBottom: "2%" }}
                  source={require("../assets/images/profile1.png")}
                /> : <Image
                  style={{ height: 24, width: 24, marginBottom: "2%" }}
                  source={require("../assets/images/profile2.png")}
                />}
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                  width: 60,
                  textAlign: 'center',
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
        name="BottomDrProfile"
        // Pass the id as a param to the Profile screen
        component={DrProfile}
      // initialParams={{ id: userId }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  home: {
    height: 24,
    width: 24,
    marginTop: "2%",
  },
  profile: {
    height: 21,
    width: 16,
  },
  activity: {
    height: 22,
    width: 16,
  },
});
