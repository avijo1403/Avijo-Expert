import React, { useState } from "react";
import { View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function CircleRadio(props){

    const [active, setActive] = useState(false);

    return(
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center',}} onPress={()=>setActive(!active)}>
            <View style={{borderWidth:2, height:16, width:16, borderRadius:100, borderColor:active?colors.blue:colors.grey}}/>
            <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black, marginLeft:'3%',}}>{props?.text}</Text>
        </TouchableOpacity>
    )
}