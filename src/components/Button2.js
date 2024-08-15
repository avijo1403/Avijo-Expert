import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const Button2 =(props)=>{


    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {props.left}
          <Text style={styles.TextStyle}>{props.Text}</Text>
          {props.image}
        </TouchableOpacity>
    )
}
export default Button2;

const styles = StyleSheet.create({
    button:{
        width:'90%',
        height:50,
        backgroundColor:colors.white,
        borderRadius:5.47,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors. blue,
    },
    TextStyle:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.blue,
        marginTop:0,
        alignSelf:'center'
    }
})