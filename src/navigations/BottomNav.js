import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DoCare from "../screens/DoCare";
import Dashboard from "../screens/Dashboard";
import Patients from "../screens/Patients";
import DrProfile from "../screens/DrProfile";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [userId, setUserId] = useState(null);

  // Fetch the id from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem("id");
      setUserId(id);
    };
    fetchUserId();
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
                }}
              >
                Patient
              </Text>
            </View>
          ),
        }}
        name="Patient"
        component={Patients}
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
              <Image
                style={styles.home}
                source={require("../assets/images/doCareGrey.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                }}
              >
                DoCare
              </Text>
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
                <Image
                  style={{ height: 24, width: 24, marginBottom: "2%" }}
                  source={require("../assets/images/profile.png")}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Gilroy-SemiBold",
                  marginTop: "2%",
                  color: focused ? colors.blue : colors.grey,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
        name="Profile"
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
