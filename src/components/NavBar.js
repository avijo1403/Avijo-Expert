import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Location from "../screens/Location";
import Comments from "../screens/Comments";
import Employee from "../screens/Employee";

const Tab = createBottomTabNavigator();

export default function NavBar(){


    return(
        <View style={{flex:1}}>
        <Tab.Navigator 
        screenOptions={{
          tabBarLabel:'',
        }}>
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={{flexDirection:'column', marginTop:10, alignItems:'center'}}>
                <Image source={require('../assets/images/Home.png')}/>
                <View style={{ backgroundColor: focused?'black':'white', width:28, top:5, height:5, justifyContent:'center', borderRadius:3}}/>
                </View>
                ),
              }} name='Home' component={Home} />
              <Tab.Screen
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <View style={{flexDirection:'column', marginTop:10, alignItems:'center'}}>
                  <Image source={require('../assets/images/Location.png')}/>
                  <View style={{ backgroundColor: focused?'black':'white', width:28, top:5, height:5, justifyContent:'center', borderRadius:3}}/>
                  </View>
                  ),
                }} name='Location' component={Location} />
                <Tab.Screen
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                      <View style={{flexDirection:'column', marginTop:10, alignItems:'center'}}>
                    <Image source={require('../assets/images/Comment.png')}/>
                    <View style={{ backgroundColor: focused?'black':'white', width:28, top:5, height:5, justifyContent:'center', borderRadius:3,}}/>
                    </View>
                    ),
                  }} name='Comments' component={Comments} />
                  <Tab.Screen
                    options={{
                      headerShown: false,
                      tabBarIcon: ({ focused }) => (
                        <View style={{flexDirection:'column', marginTop:10, alignItems:'center'}}>
                      <Image source={require('../assets/images/Employee.png')}/>
                      <View style={{ backgroundColor: focused?'black':'white', width:28, top:5, height:5, justifyContent:'center', borderRadius:3, borderBottomRightRadius:3}}/>
                      </View>
                      ),
                    }} name='Employee' component={Employee} />
        </Tab.Navigator>
        </View>
    )
}