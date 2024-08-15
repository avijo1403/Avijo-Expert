import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {CountryPicker} from "react-native-country-codes-picker";
import { colors } from "../Theme/GlobalTheme";


export default function CodePicker(){

    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');

    return(
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
              width: '100%',
              height: 47,
              backgroundColor: 'white',
              borderWidth:1,
              padding: 10,
              borderRadius:3,
              borderColor:colors.grey,
              flexDirection:'row',
              justifyContent:'center'
          }}
        >
          <Text style={{
              color: colors.grey,
              fontSize: 14,
              fontFamily:'Gilroy-Medium',
              textAlign:'center'
          }}>
              {countryCode}
          </Text>
          <Image source={require('../assets/images/down.png')} style={{height:12, width:12, top:'5%', marginLeft:'10%'}}/>
        </TouchableOpacity>
        <CountryPicker
          show={show}
          showOnly={['IN']}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'30%',
    }
})